"use client";

const GetAQuoteForm = ({ initialData, updateData, onContinue }) => {
  return (
    <section className="flex flex-col gap-[95px] w-full items-center justify-center pt-[149px] pb-[74px]">
      <div className="flex flex-col items-center gap-[15px]">
        <h1 className="text-[#FC7C13] text-[64px] font-semibold">Get a Quote</h1>
        <p className="text-[#F7FCFE] font-medium text-[18px]">Provide the project details</p>
      </div>

      <form
        className="flex flex-col w-full items-center gap-[25px]"
        onSubmit={(e) => {
          e.preventDefault();
          onContinue();
        }}
      >
        <div className="w-[50%] flex flex-col gap-[20px] justify-start items-stretch">
          <label htmlFor="tags" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
            Add tags
          </label>
          <input
            placeholder="e.g. Defi, Refi ..."
            id="tags"
            type="text"
            value={initialData.tags}
            onChange={(e) => updateData({ tags: e.target.value })}
            className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] rounded-[10px] outline-none h-[55px] border-[#464646] border-[1px]"
          />
        </div>

        <div className="w-[50%] flex flex-col gap-[20px] justify-start items-stretch">
          <label htmlFor="doc" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
            Attach project document
          </label>
          <input
            placeholder="Add link to external documents, photos, sites, videos, and presentation"
            id="doc"
            type="text"
            value={initialData.doc}
            onChange={(e) => updateData({ doc: e.target.value })}
            className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] rounded-[10px] outline-none h-[55px] border-[#464646] border-[1px]"
          />
        </div>

        <div className="w-[50%] flex flex-col gap-[20px] justify-start items-stretch">
          <label htmlFor="description" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
            Description
          </label>
          <textarea
            placeholder="Add link to external documents, photos, sites, videos, and presentation"
            id="description"
            value={initialData.description}
            onChange={(e) => updateData({ description: e.target.value })}
            className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] rounded-[10px] outline-none h-[141px] border-[#464646] border-[1px]"
            rows={4}
          />
        </div>

        <button type="submit" className="bg-buttonOrange w-[50%] text-[#fff] text-[16px] font-medium p-[10px] rounded-[10px]">
          Continue
        </button>
      </form>
    </section>
  );
};

export default GetAQuoteForm;
