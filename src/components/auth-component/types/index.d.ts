interface iAuthComponentViewProps {
  authTabsData: { id: string | number; name: string }[];
  selectedTabId: string | number;
  readonly formData: formDataStateType;
  avatarPreview: string | ArrayBuffer | null;
  handleOnSelectTab(_id: number): void;
  onSubmit(_e: React.FormEvent): void;
  handleOnChangeInputFields(_e: any): void;
}

type formDataStateType = {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
};
