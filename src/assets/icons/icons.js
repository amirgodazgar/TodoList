import {
  PencilAltIcon,
  CheckIcon,
  TrashIcon,
  PlusIcon,
  MoonIcon,
  LightBulbIcon,
} from "@heroicons/react/solid";

export const buttonIcon = {
  add: <PlusIcon className="h-5 w-5 text-lime-600 stroke-lime-600 m-auto" />,
  done: <CheckIcon className="h-5 w-5 text-lime-600 m-auto" />,
  edit: <PencilAltIcon className="h-5 w-5  text-orange-600 m-auto" />,
  remove: <TrashIcon className="h-5 w-5 text-red-600 m-auto" />,
  light: <LightBulbIcon className="h-8 w-8 text-slate-400 m-auto" />,
  dark: <MoonIcon className="h-8 w-8 text-slate-900 m-auto" />,
};
