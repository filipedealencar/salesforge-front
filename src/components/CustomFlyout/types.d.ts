interface IFlayout {
  isOpen: boolean;
  closedFlyout: (close: boolean) => void;
  filterCallback: (type: string, value: string) => void;
}

interface MainFlyoutStyle {
  $isOpen: boolean;
}
