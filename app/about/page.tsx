import React from "react";

const page = () => {
  return (
    <div className="grid gap-10">
      <h1 className="font-bold text-2xl border-b-4 border-[#cc9933] w-fit mb-10">
        ABOUT THE BRAND
      </h1>

      <div className="grid gap-3">
        <h1 className="text-xl border-b-2 border-[#cc9933] w-fit">
          BRAND NAME
        </h1>
        <p className="font-bold">
          Tros <small className="font-light">which means </small> Trash
        </p>
      </div>

      <div className="grid gap-3">
        <h1 className="text-xl border-b-2 border-[#cc9933] w-fit">
          ORIGIN OF NAME
        </h1>
        <p>
          Trash in Old Norse. Language of the Vikings in the medieval ages,
          There was one major word to describe clutter.
        </p>
        <p>
          This word was used by Vikings and is the basis for the English word of
          today &quot;trash&quot;.
        </p>
      </div>

      <div >
        <h1 className="text-xl border-b border-[#cc9933] w-fit mb-10">
          BRAND COLOR
        </h1>

        <div className="flex gap-4">
          <div className="grid gap-5">
            <div className="orange flex gap-5">
              <div className="bg-[#cc9933] h-8 w-8"></div>
              <p className="my-auto text-xl">#Cc9933</p>
            </div>
            <div className="WHITE flex gap-5">
              <div className="bg-[#fff] h-8 w-8 border"></div>
              <p className="my-auto text-xl">#FFFFFF</p>
            </div>
            <div className="green flex gap-5">
              <div className="bg-[#529c4f] h-8 w-8"></div>
              <p className="my-auto text-xl">#529C4F</p>
            </div>
          </div>
          <div className="flex gap-1 md:gap-4">
            <div className="bg-[#529c4f] w-24"></div>
            <div className="bg-[#fff] border w-24"></div>
            <div className="bg-[#cc9933] w-24"></div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl border-b-2 border-[#cc9933] w-fit mb-10">
          BRAND FONTS
        </h1>

        <div className="grid gap-5">
          <div className="orange flex gap-5">
            <div className="bg-[#cc9933] h-4 w-4"></div>
            <p className="my-auto text-xl">MONTSERRAT</p>
          </div>
          <div className="green flex gap-5">
            <div className="bg-[#529c4f] h-4 w-4"></div>
            <p className="my-auto text-xl">AZONIX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
