import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface FilterSortBarProps {
  filtersOpen: boolean;
  setFiltersOpen: (open: boolean) => void;
  itemCount: number;
}

const FilterSortBar = ({ filtersOpen, setFiltersOpen, itemCount }: FilterSortBarProps) => {
  const [sortBy, setSortBy] = useState("featured");

  const categories = ["Hair Care", "Skin Tools"];
  const priceRanges = ["Under €40", "€40 - €60"];
  const concerns = ["Hair growth", "Thinning edges", "Scalp health", "Absorption"];

  const filterGroups = [
    { title: "Category", options: categories },
    { title: "Price", options: priceRanges },
    { title: "Concern", options: concerns },
  ];

  return (
    <section className="w-full px-6 mb-8 border-b border-border pb-4">
      <div className="flex justify-between items-center">
        <p className="text-sm font-light text-muted-foreground">
          {itemCount} {itemCount === 1 ? "product" : "products"}
        </p>

        <div className="flex items-center gap-4">
          <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="font-light hover:bg-transparent hover:text-brand"
              >
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background border-none shadow-none">
              <SheetHeader className="mb-6 border-b border-border pb-4">
                <SheetTitle className="text-lg font-light">Filters</SheetTitle>
              </SheetHeader>

              <div className="space-y-8">
                {filterGroups.map((group, groupIndex) => (
                  <div key={group.title}>
                    <div>
                      <h3 className="text-xs tracking-[0.15em] uppercase mb-4 text-brand">
                        {group.title}
                      </h3>
                      <div className="space-y-3">
                        {group.options.map((option) => (
                          <div key={option} className="flex items-center space-x-3">
                            <Checkbox
                              id={option}
                              className="border-border data-[state=checked]:bg-brand data-[state=checked]:border-brand"
                            />
                            <Label
                              htmlFor={option}
                              className="text-sm font-light text-foreground cursor-pointer"
                            >
                              {option}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    {groupIndex < filterGroups.length - 1 && (
                      <Separator className="border-border mt-8" />
                    )}
                  </div>
                ))}

                <div className="flex flex-col gap-2 pt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full border-none hover:bg-transparent hover:underline hover:text-brand font-normal text-left justify-start"
                  >
                    Apply Filters
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full border-none hover:bg-transparent hover:underline font-light text-left justify-start"
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-auto border-none bg-transparent text-sm font-light shadow-none rounded-none pr-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="shadow-none border-none rounded-none bg-background">
              <SelectItem
                value="featured"
                className="hover:bg-transparent hover:underline pl-2 [&>span:first-child]:hidden"
              >
                Featured
              </SelectItem>
              <SelectItem
                value="price-low"
                className="hover:bg-transparent hover:underline pl-2 [&>span:first-child]:hidden"
              >
                Price: Low to High
              </SelectItem>
              <SelectItem
                value="price-high"
                className="hover:bg-transparent hover:underline pl-2 [&>span:first-child]:hidden"
              >
                Price: High to Low
              </SelectItem>
              <SelectItem
                value="newest"
                className="hover:bg-transparent hover:underline pl-2 [&>span:first-child]:hidden"
              >
                Newest
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default FilterSortBar;
