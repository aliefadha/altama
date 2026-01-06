// This is a root layout that doesn't render anything
// All rendering is done in the [locale] layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}