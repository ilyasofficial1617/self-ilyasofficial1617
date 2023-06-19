export default function WebDev() {
  return (
    <div>
      <div className="flex h-screen flex-col">
        <div className="grow bg-teal-400">
          <p>WebDev Page</p>
        </div>

        <div className="">
          <svg
            id="visual"
            viewBox="0 0 900 100"
            className="h-auto w-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 48L64 48L64 57L129 57L129 54L193 54L193 54L257 54L257 8L321 8L321 35L386 35L386 9L450 9L450 8L514 8L514 38L579 38L579 52L643 52L643 48L707 48L707 8L771 8L771 56L836 56L836 25L900 25L900 44L900 0L900 0L836 0L836 0L771 0L771 0L707 0L707 0L643 0L643 0L579 0L579 0L514 0L514 0L450 0L450 0L386 0L386 0L321 0L321 0L257 0L257 0L193 0L193 0L129 0L129 0L64 0L64 0L0 0Z"
              className="fill-teal-400"
              strokeLinecap="square"
              strokeLinejoin="miter"
            ></path>
          </svg>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
