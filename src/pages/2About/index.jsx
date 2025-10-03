import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import Editor from "react-simple-wysiwyg";
import DOMPurify from "dompurify";
import { routesFlat } from "../../routes";
import Tabs from "./Tabs";
import Marquee from "./Marquee";
import { bio } from "../../helpers/constants";

export default function About() {
  const [richText, setRichText] = useState(bio);
  const [htmlText, setHTMLText] = useState("");
  const [textDisplay, onTextBodyChange] = useState("DOM");
  const [codeCopied, setCodeCopied] = useState(false);

  const onRichTextChange = (e) => setRichText(e.target.value);

  // sanitize whenever richText changes
  const safeHtml = useMemo(() => DOMPurify.sanitize(richText), [richText]);

  useEffect(() => {
    const splitRichText = richText.split("</div>");
    const nestedSplit = splitRichText.map((item) => item.split('">'));
    setHTMLText(nestedSplit);
  }, [richText]);

  const copyCode = () => {
    if (!codeCopied) {
      setCodeCopied(true);

      // Copy the text inside the text field
      navigator.clipboard.writeText(safeHtml);
    }
  };

  useEffect(() => {
    if (codeCopied) {
      setTimeout(() => {
        setCodeCopied(false);
      }, 3000);
    }
  }, [codeCopied]);

  return (
    <div className={parentCont} id={routesFlat.about}>
      <Tabs onTextBodyChange={onTextBodyChange} textDisplay={textDisplay} />
      <div className=" w-full md:max-h-[450px] overflow-scroll mb-12 flex justify-center">
        {textDisplay === "DOM" && (
          <code
            className={plainTextCont}
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          />
        )}
        {textDisplay === "<HTML />" && (
          <div className={htmlContainer}>
            <code
              onClick={copyCode}
              className={clsx(
                (codeCopied ? "text-green border-green " : "") + copyText
              )}
            >
              {codeCopied ? <span>Copied!</span> : <span>Copy</span>}
            </code>
            {htmlText.map((div) => {
              return (
                div.length > 1 && (
                  <code className="md:text-sm text-xxs">
                    <div>
                      {div[0]}
                      {'">'}
                    </div>
                    <div className="ml-10">{div[1]}</div>
                    <div>{"</div>"}</div>
                  </code>
                )
              );
            })}
          </div>
        )}
        {textDisplay === "Rich Text Editor" && (
          <Editor
            value={richText}
            onChange={onRichTextChange}
            className="p-10 bg-orange/10 text-sm"
          />
        )}
      </div>
      <Marquee />
    </div>
  );
}

const parentCont = clsx(
  "md:h-screen mb-40 md:mb-0 w-full flex flex-col items-center justify-center max-w-[600px] lg:max-w-[800px] px-10 md:px-0"
);
const plainTextCont = clsx(" overflow-scroll h-[fit-content] text-xs pr-2");
const htmlContainer = clsx(
  "shadow-md bg-text/10 md:p-10 px-4 pb-4 pt-10 rounded-md overflow-scroll relative"
);
const copyText = clsx(
  "absolute top-0 right-0 text-[10px] mr-2 mt-2 hover:bg-text/10 hover:cursor-pointer border p-2 rounded-md w-[60px] text-center"
);
