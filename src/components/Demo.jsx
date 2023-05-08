import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets/index";

const Demo = () => {
  const [article, setarticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {
    alert("Submitted");
  };

  return (
    <section className="w-full mt-16 max-w-xl">
      <div className="w-full flex flex-col  gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Please enter the url"
            value={article.url}
            onChange={(e) => setarticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <p>↵</p>
          </button>
        </form>
        {/* Browse History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          <div className="link_card">
            <div className="copy_btn" onClick={() => {}}>
              <img src="" alt="" className="w-[40%] h-[40%] object-contain" />
            </div>
            <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
              Url
            </p>
          </div>
        </div>

        {/* Display Results */}
        <div className="my-10 max-w-full flex justify-center items-center">
          <img src="" alt="loader" className="w-20 h-20 object-contain" />
          <div className="flex flex-col gap-3">
            <h2 className="font-satoshi font-bold text-gray-600 text-xl">
              Article <span className="blue_gradient">Summary</span>
            </h2>
            <div className="summary_box">
              <p className="font-inter font-medium text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur doloribus ducimus eaque, enim nemo odio iure
                cumque, architecto aliquid tenetur reiciendis? Provident aperiam
                consequatur, dolores at officiis ad cum sit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
