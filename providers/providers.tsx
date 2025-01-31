import { NextuiProvider } from "./nextuiProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextuiProvider>{children}</NextuiProvider>
    </>
  );
}
