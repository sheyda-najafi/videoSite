import {
  ClipboardEvent,
  CompositionEvent,
  DragEvent,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  PointerEvent,
  ChangeEvent,
  TouchEvent,
  WheelEvent,
  MouseEventHandler,
} from 'react';

// ================ actions

/* ✅ General Event Handlers */
export type OnClickHandler = (event: MouseEvent<HTMLElement>) => void;
export type OnDoubleClickHandler = (event: MouseEvent<HTMLElement>) => void;
export type OnMouseDownHandler = (event: MouseEvent<HTMLElement>) => void;
export type OnMouseUpHandler = (event: MouseEvent<HTMLElement>) => void;
export type OnMouseMoveHandler = (event: MouseEvent<HTMLElement>) => void;
export type OnMouseEnterHandler = (event: MouseEvent<HTMLElement>) => void;
export type OnMouseLeaveHandler = (event: MouseEvent<HTMLElement>) => void;
export type OnClickHandlerButton = (event: MouseEvent<HTMLButtonElement>) => void;

/* ✅ Keyboard Events */
export type OnKeyDownHandler = (event: KeyboardEvent<HTMLElement>) => void;
export type OnKeyPressHandler = (event: KeyboardEvent<HTMLElement>) => void;
export type OnKeyUpHandler = (event: KeyboardEvent<HTMLElement>) => void;

/* ✅ Focus Events */
export type OnFocusHandler = (event: FocusEvent<HTMLElement>) => void;
export type OnBlurHandler = (event: FocusEvent<HTMLElement>) => void;

/* ✅ Clipboard Events */
export type OnCopyHandler = (event: ClipboardEvent<HTMLElement>) => void;
export type OnCutHandler = (event: ClipboardEvent<HTMLElement>) => void;
export type OnPasteHandler = (event: ClipboardEvent<HTMLElement>) => void;

/* ✅ Drag & Drop Events */
export type OnDragHandler = (event: DragEvent<HTMLElement>) => void;
export type OnDragEndHandler = (event: DragEvent<HTMLElement>) => void;
export type OnDragEnterHandler = (event: DragEvent<HTMLElement>) => void;
export type OnDragExitHandler = (event: DragEvent<HTMLElement>) => void;
export type OnDragLeaveHandler = (event: DragEvent<HTMLElement>) => void;
export type OnDragOverHandler = (event: DragEvent<HTMLElement>) => void;
export type OnDragStartHandler = (event: DragEvent<HTMLElement>) => void;
export type OnDropHandler = (event: DragEvent<HTMLElement>) => void;

/* ✅ Input Events */
export type OnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;
export type OnInputHandler = (event: FormEvent<HTMLInputElement>) => void;

/* ✅ Form Events */
export type OnSubmitHandler = (event: FormEvent<HTMLFormElement>) => void;
export type OnResetHandler = (event: FormEvent<HTMLFormElement>) => void;

/* ✅ Pointer Events */
export type OnPointerDownHandler = (event: PointerEvent<HTMLElement>) => void;
export type OnPointerMoveHandler = (event: PointerEvent<HTMLElement>) => void;
export type OnPointerUpHandler = (event: PointerEvent<HTMLElement>) => void;
export type OnPointerEnterHandler = (event: PointerEvent<HTMLElement>) => void;
export type OnPointerLeaveHandler = (event: PointerEvent<HTMLElement>) => void;

/* ✅ Touch Events */
export type OnTouchStartHandler = (event: TouchEvent<HTMLElement>) => void;
export type OnTouchMoveHandler = (event: TouchEvent<HTMLElement>) => void;
export type OnTouchEndHandler = (event: TouchEvent<HTMLElement>) => void;

/* ✅ Wheel Event */
export type OnWheelHandler = (event: WheelEvent<HTMLElement>) => void;

/* ✅ Composition Events */
export type OnCompositionStartHandler = (event: CompositionEvent<HTMLElement>) => void;
export type OnCompositionUpdateHandler = (event: CompositionEvent<HTMLElement>) => void;
export type OnCompositionEndHandler = (event: CompositionEvent<HTMLElement>) => void;

// textarea
export type OnChangeHandlerTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => void;
export type OnFocusHandlerTextarea = (event: FocusEvent<HTMLTextAreaElement>) => void;
export type OnBlurHandlerTextarea = (event: FocusEvent<HTMLTextAreaElement>) => void;
export type OnInputHandlerTextarea = (event: FormEvent<HTMLTextAreaElement>) => void;
export type OnKeyDownHandlerTextarea = (event: KeyboardEvent<HTMLTextAreaElement>) => void;
export type OnKeyUpHandlerTextarea = (event: KeyboardEvent<HTMLTextAreaElement>) => void;
export type OnKeyPressHandlerTextarea = (event: KeyboardEvent<HTMLTextAreaElement>) => void;
export type OnPasteHandlerTextarea = (event: ClipboardEvent<HTMLTextAreaElement>) => void;

// image
export type OnClickHandlerImage = MouseEventHandler<HTMLImageElement>;

export type onClickInputHandler = React.MouseEventHandler<HTMLInputElement>;

// link
export type onClickLink = (event: MouseEvent<HTMLAnchorElement>) => void;
export type onMouseEnterLink = (event: MouseEvent<HTMLAnchorElement>) => void;
export type onClickHandle = (v: number) => void;
import { Dispatch, SetStateAction } from 'react';

export type setState<T> = Dispatch<SetStateAction<T>>;

export type IconProps = {
  width?: string;
  height?: string;
  fill?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  className?: string; // ✅ make optional
};

// =========================

export type video = {
  id: number;
  title: string;
  channel: { name: string; fileImage: { name: string }; uuid: string; verified: boolean };
  createdAt: Date;
  view: number;
  fileImage: { name: string };
  uuid?: string | number;
};

export type TranslationFunction = (key: string, values?: Record<string, any>) => string;

export type channel = {
  id: number;
  title: string;
  createdAt: Date;
  view: number;
  fileImage: { name: string };
  fileWideImage: { name: string };
  uuid?: string | number;
  verified?: boolean;
  subscriber?: number | string;
  videos?: number | string;
};
export interface CategoryItem {
  id: string;
  title: string;
  slug: string;
}

export type ProfileInfo = {
  id: number;
  title: string;
  createdAt: Date;
  view: number;
  fileImage: { name: string };
  fileWideImage: { name: string };
  uuid?: string | number;
  verified?: boolean;
  subscriber?: number | string;
  videos?: number | string;
};
