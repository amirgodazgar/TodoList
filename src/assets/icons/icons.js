import {
  PencilAltIcon,
  CheckIcon,
  TrashIcon,
  PlusIcon,
} from "@heroicons/react/solid";

export const buttonIcon = {
  add: <PlusIcon className="h-5 w-5 text-lime-600 stroke-lime-600" />,
  done: <CheckIcon className="h-5 w-5 text-lime-600" />,
  edit: <PencilAltIcon className="h-5 w-5  text-orange-600" />,
  remove: <TrashIcon className="h-5 w-5 text-red-600" />,
};
