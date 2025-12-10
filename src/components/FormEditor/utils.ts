import { FormData, ActionForm, MessageForm, ModalForm, ModalElement, ActionButton } from './types';
import ESON from '@site/src/utils/eson';

export const generateJSON = (data: FormData): string => {
  const cleanData = cleanFormData(data);
  return JSON.stringify(cleanData, null, 4);
};

export const generateESON = (data: FormData): string => {
  const cleanData = cleanFormData(data);
  return ESON.stringify(cleanData);
};

// const cleanFormData = <T extends ActionForm | MessageForm | ModalForm(data: T): T => {
//   if (data.typ === 'act') {
//     return cleanActionForm(data);
//   } else if (data.typ === 'msg') {
//     return cleanMessageForm(data);
//   } else if (data.typ === 'mdl') {
//     return cleanModalForm(data);
//   }
//   return data;
// };

function cleanFormData<T extends ActionForm | MessageForm | ModalForm>(data: T): T {
  if (data.typ === 'act') {
    return cleanActionForm(data) as T;
  } else if (data.typ === 'msg') {
    return cleanMessageForm(data) as T;
  } else if (data.typ === 'mdl') {
    return cleanModalForm(data) as T;
  }
  return data;
}

const cleanActionForm = (data: ActionForm) => {
  const result: ActionForm = {
    typ: 'act',
    ttl: data.ttl,
    btn: data.btn.map(b => {
      const btn: ActionButton = { txt: b.txt };
      if (b.img) btn.img = b.img;
      if (b.act && b.act.typ as any !== "") btn.act = b.act;
      return btn;
    })
  } satisfies ActionForm;
  if (data.bdy) result.bdy = data.bdy;
  
  // typ is optional for action, but let's keep it for clarity or remove if user wants strict "omit default".
  // The doc says: "typ is optional, defaults to action". So we can remove it if it is 'action'.
  // However, keeping it is safer. But the user asked to omit if default.
  // Let's omit 'typ' for action form if it is 'action'.
  if (result.typ === 'act') delete result.typ;

  return result;
};

const cleanMessageForm = (data: MessageForm) => {
  const result: MessageForm = {
    typ: 'msg',
    ttl: data.ttl,
    bdy: data.bdy,
    bt1: { txt: data.bt1.txt },
    bt2: { txt: data.bt2.txt }
  };
  if (data.bt1.act && data.bt1.act.typ as any !== "") result.bt1.act = data.bt1.act;
  if (data.bt2.act && data.bt2.act.typ as any !== "") result.bt2.act = data.bt2.act;
  return result;
};

const cleanModalForm = (data: ModalForm) => {
  const result: ModalForm = {
    typ: 'mdl',
    ttl: data.ttl,
    cnt: data.cnt.map(cleanModalElement)
  };
  return result;
};

const cleanModalElement = (el: ModalElement): any => {
  const base: any = {
    typ: el.typ,
    lbl: el.lbl,
    act: el.act
  };

  if (el.typ === 'dd') {
    base.opt = el.opt;
    if (el.def !== undefined && el.def !== 0) base.def = el.def;
  } else if (el.typ === 's') {
    base.min = el.min;
    base.max = el.max;
    base.stp = el.stp;
    // Slider default is tricky. If not provided, what is it? 
    // Let's assume if it's undefined we don't send it. 
    // If the user sets it, we send it. 
    // But if the user sets it to a value that effectively means "no default override", we might omit.
    // However, slider usually needs a default visual position. 
    // Doc says "def: Default value (optional)".
    console.log('Slider def:', el.def);
    if (!Number.isNaN(el.def)) base.def = el.def;
  } else if (el.typ === 'tf') {
    base.plh = el.plh;
    if (el.def) base.def = el.def;
  } else if (el.typ === 't') {
    if (el.def === true) base.def = true; // Default is false, so include if true
  }

  return base;
};

// Overwrite the export
export const generateESONCommand = (data: FormData): string => {
    const clean = cleanFormData(data);
    const eson = ESON.stringify(clean);
    return `/scriptevent capi:form ${eson}`;
}
