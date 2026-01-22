"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Heart, Baby, ShieldCheck, CreditCard } from "lucide-react";

export default function ParentSignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [parentInfo, setParentInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "Canada",
  });
  const [children, setChildren] = useState([
    { firstName: "", age: "", interest: "Coding", notes: "" },
  ]);

  // Inside your ParentSignupPage component
  const PRICE_PER_CHILD = 50000; // 50,000 NGN
  const totalAmount = children.length * PRICE_PER_CHILD;

  const addChild = () =>
    setChildren([
      ...children,
      { firstName: "", age: "", interest: "Coding", notes: "" },
    ]);

  //   const removeChild = (index: number) => {
  //     setChildren(children.filter((_, i) => i !== index));
  //   };

  const handleChildChange = (index: number, field: string, value: string) => {
    const updated = [...children];
    updated[index] = { ...updated[index], [field]: value };
    setChildren(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Save Parent & Children to MongoDB
      const res = await fetch("/api/signup/parent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parentInfo, children }),
      });

      if (!res.ok) throw new Error("Signup failed");
      const { id } = await res.json();

      // 2. Initialize OPay Payment
      const payRes = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: parentInfo.email,
          fullName: parentInfo.fullName,
          amount: children.length * 50000, // example price
          orderId: id,
        }),
      });

      const payData = await payRes.json();

      if (payData.checkoutUrl) {
        window.location.href = payData.checkoutUrl; // Redirect to OPay
      } else {
        router.push("/signup/success"); // Fallback if payment fails to init
      }
    } catch (error: unknown) {
      // Use 'error' here so the compiler knows it's being handled
      const message =
        error instanceof Error ? error.message : "Submission failed";
      console.error("Dreambox Signup Error:", message);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFE] py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-purple-50 overflow-hidden">
        <div className="bg-[#6347D1] p-10 text-white text-center">
          <Heart
            className="mx-auto mb-4 text-pink-400"
            size={40}
            fill="currentColor"
          />
          <h1 className="text-3xl font-black">Join the Dreambox Family</h1>
          <p className="opacity-80 mt-2">
            {`            The first step toward your child's future in tech.
`}{" "}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-10">
          {/* Parent Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <ShieldCheck className="text-blue-500" size={20} /> Parent Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                required
                placeholder="Full Name"
                className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) =>
                  setParentInfo({ ...parentInfo, fullName: e.target.value })
                }
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) =>
                  setParentInfo({ ...parentInfo, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Children Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <Baby className="text-orange-400" size={20} /> Student Info
              </h3>
              <button
                type="button"
                onClick={addChild}
                className="text-[#6347D1] font-bold text-sm flex items-center gap-1"
              >
                <Plus size={16} /> Add Sibling
              </button>
            </div>

            {children.map((child, index) => (
              <div
                key={index}
                className="p-6 bg-purple-50/50 rounded-[2rem] border border-purple-100 relative"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    required
                    placeholder="Child's Name"
                    className="p-3 rounded-xl border-none"
                    value={child.firstName}
                    onChange={(e) =>
                      handleChildChange(index, "firstName", e.target.value)
                    }
                  />
                  <input
                    required
                    type="number"
                    placeholder="Age"
                    className="p-3 rounded-xl border-none"
                    value={child.age}
                    onChange={(e) =>
                      handleChildChange(index, "age", e.target.value)
                    }
                  />
                  <select
                    className="p-3 rounded-xl border-none"
                    value={child.interest}
                    onChange={(e) =>
                      handleChildChange(index, "interest", e.target.value)
                    }
                  >
                    <option>Coding</option>
                    <option>Robotics</option>
                    <option>Special Needs</option>
                  </select>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <section className="bg-slate-50 rounded-[2rem] p-8 border-2 border-dashed border-slate-200">
            <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">
              Enrollment Summary
            </h3>

            <div className="space-y-3">
              {children.map((child, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">
                    {child.firstName || `Child ${i + 1}`} — {child.interest}
                  </span>
                  <span className="font-bold text-slate-900">
                    ₦{PRICE_PER_CHILD.toLocaleString()}
                  </span>
                </div>
              ))}

              <div className="h-px bg-slate-200 my-4" />

              <div className="flex justify-between items-center text-xl">
                <span className="font-black text-slate-900">Total Amount</span>
                <span className="font-black text-[#6347D1]">
                  ₦{totalAmount.toLocaleString()}
                </span>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 mt-4 text-center italic">
              * Payments are processed securely via OPay Business. International
              cards (Visa/Mastercard) are accepted.
            </p>
          </section>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6347D1] text-white py-5 rounded-[2rem] font-black text-lg shadow-xl flex items-center justify-center gap-3 hover:bg-[#523bb3] transition-all disabled:opacity-50"
          >
            {loading ? (
              "Processing..."
            ) : (
              <>
                Proceed to Payment <CreditCard />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
