interface CollapseProps {
  title: string;
  openCollapse: boolean;
  options: { label: string | ReactNode; value: string }[];
  filterBy?: (value: string) => void;
  type?: "input" | undefined;
  ref?: React.LegacyRef<HTMLDivElement>;
}
