# UseCallback
- I can use this for the same purpose as useMemo, because it also deals with referential equality, depends on dependency to recalculate and update and have save syntax
- One minor difference is that, it reference a function instead of value which useMemo does
- In this, while calling that function I can pass arguments
- This is useful when creating a function is expensive
