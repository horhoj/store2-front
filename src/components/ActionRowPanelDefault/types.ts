export interface ActionRowPanelDefaultProps {
  id: number;
  handleEditCb?(id: number): void;
  handleDeleteCb?(id: number): void;
  isEditBtn: boolean;
  isDeleteBtn: boolean;
  disabled: boolean;
}
