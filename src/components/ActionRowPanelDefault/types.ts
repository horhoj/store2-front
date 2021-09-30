export interface ActionRowPanelDefaultProps {
  id: number;
  handleEditCb?(id: number): void;
  handleDeleteCb?(id: number): void;
  handleSelectCb?(id: number): void;
  isEditBtn: boolean;
  isDeleteBtn: boolean;
  isSelectBtn: boolean;
  disabled: boolean;
}
