export interface MoreButtonProps {
  href: string;
  buttonText: string;
  type?: string;
}

function MoreButton(props: MoreButtonProps) {
  const { href, buttonText, type } = props;
  let classes = '';
  if (type === 'small') {
    classes =
      'inline-block rounded-full border-white border-solid border-2 px-4 py-1 bg-slate-800 text-white font-medium text-xs leading-tight uppercase shadow-sm hover:bg-white hover:text-black   hover:shadow-md focus:bg-blue-500 focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out';
  } else {
    classes =
      'inline-block rounded-full border-white border-solid border-4 px-6 py-2.5 bg-slate-800 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-white hover:text-black   hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out';
  }
  return (
    <a href={href} type="button" className={classes}>
      {buttonText}
    </a>
  );
}
export default MoreButton;
