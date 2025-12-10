export type FormType = 'act' | 'msg' | 'mdl';

export interface BaseForm {
  typ: FormType;
  ttl: string;
}

export interface AddTagAction {
  typ: 'at';
  val: string;
}

export interface RemoveTagAction {
  typ: 'rt';
  val: string;
}

export interface SetScoreAction {
  typ: 'ss';
  val: {
    tgt?: string;
    obj: string;
    val: number;
  };
}

export interface AddScoreAction {
  typ: 'as';
  val: {
    tgt?: string;
    obj: string;
    val: number;
  };
}

export interface RunCommandAction {
  typ: 'r';
  val: string;
}

export type FormActions = AddTagAction | RemoveTagAction | SetScoreAction | AddScoreAction | RunCommandAction;

export interface ActionButton {
  id?: string; // Internal ID for drag and drop
  txt: string;
  img?: string;
  act?: FormActions; // Complex action object, keeping it any for now or string
}

export interface ActionForm extends BaseForm {
  typ: 'act';
  bdy?: string;
  btn?: ActionButton[];
}

export interface MessageButton {
  txt: string;
  act?: any;
}

export interface MessageForm extends BaseForm {
  typ: 'msg';
  bdy: string;
  bt1: MessageButton;
  bt2: MessageButton;
}

export type ModalElementType = 'dd' | 's' | 'tf' | 't';

export interface BaseModalElement {
  id: string; // Internal ID for drag and drop
  typ: ModalElementType;
  lbl: string;
  act: string;
}

export interface DropdownElement extends BaseModalElement {
  typ: 'dd';
  opt: string[];
  def?: number;
}

export interface SliderElement extends BaseModalElement {
  typ: 's';
  min: number;
  max: number;
  stp: number;
  def?: number;
}

export interface TextFieldElement extends BaseModalElement {
  typ: 'tf';
  plh: string;
  def?: string;
}

export interface ToggleElement extends BaseModalElement {
  typ: 't';
  def?: boolean;
}

export type ModalElement = DropdownElement | SliderElement | TextFieldElement | ToggleElement;

export interface ModalForm extends BaseForm {
  typ: 'mdl';
  cnt: ModalElement[];
}

export type FormData = ActionForm | MessageForm | ModalForm;
