"use client";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

const Cart = () => {
  const itemCount = 10;

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
                  <span className="flex-1">1</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>Nothing here</div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
