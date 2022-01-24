import {
  PencilAltIcon,
  CheckIcon,
  TrashIcon,
  PlusIcon,
} from "@heroicons/react/solid";

export const buttonIcon = {
  add: <PlusIcon className="h-5 w-5 text-lime-600 stroke-lime-600 m-auto" />,
  done: <CheckIcon className="h-5 w-5 text-lime-600 m-auto" />,
  edit: <PencilAltIcon className="h-5 w-5  text-orange-600 m-auto" />,
  remove: <TrashIcon className="h-5 w-5 text-red-600 m-auto" />,
};
