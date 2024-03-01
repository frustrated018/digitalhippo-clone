"use client";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Cart = () => {
  const itemCount = 0;
  const fee = 20;
  const total = 69;

  return (
    <Sheet>
      <SheetTrigger className="group -ml-2 flex items-center p-2">
        <ShoppingCart
          className="size-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-500 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader className="space-y-2.5">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>

        {itemCount > 0 ? (
          <>
            <div className="flex flex-col w-full">
              {/* //TODO: Display whater is in the cart */}
              Cart Items
            </div>
            <div className="space-y-4">
              <Separator />

              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span className="flex-1">Free</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span className="flex-1">{formatPrice(fee)}</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span className="flex-1">{formatPrice(total)}</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({ className: "w-full" })}
                  >
                    Continue To Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col h-full items-center justify-center space-y-1">
              <div className="relative mb-4 size-60 text-muted-foreground">
                <Image
                  alt="hippo-with-empty-cart"
                  src="/hippo-empty-cart.png"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="text-xl font-semibold">Your cart is empty.</div>
              <SheetTrigger asChild>
                <Link
                  href="/products"
                  className={buttonVariants({
                    className: "text-sm text-muted-foreground",
                    variant: "link",
                    size: "sm",
                  })}
                >
                  Add items to your cart to checkout
                </Link>
              </SheetTrigger>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
