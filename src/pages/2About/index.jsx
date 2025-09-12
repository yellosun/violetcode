import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import Editor from "react-simple-wysiwyg";
import DOMPurify from "dompurify";
import { routesFlat } from "../../routes";
import Tabs from "./Tabs";
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
      <div className="w-full h-[600px] flex justify-center">
        {textDisplay === "DOM" && (
          <code
            className={plainTextCont}
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          />
        )}
        {textDisplay === "<HTML />" && (
          <div className={htmlContainer}>
            <div
              onClick={copyCode}
              className={clsx(
                (codeCopied ? "text-green border-green " : "") + copyText
              )}
            >
              {codeCopied ? <span>Copied!</span> : <span>Copy</span>}
            </div>
            {htmlText.map((div) => {
              return (
                div.length > 1 && (
                  <code className="text-sm">
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
            className="p-10 bg-orange/10"
          />
        )}
      </div>
    </div>
  );
}

const parentCont = clsx(
  "h-screen flex flex-col items-center justify-center max-w-[800px]"
);
const plainTextCont = clsx(
  "border-l-2 border-orange pl-10 max-h-[600px] overflow-scroll h-[fit-content] text-sm"
);
const htmlContainer = clsx(
  "shadow-md bg-text/10 p-10 rounded-md max-h-[600px] overflow-scroll relative"
);
const copyText = clsx(
  "absolute top-0 right-0 text-[10px] mr-2 mt-2 hover:bg-text/10 hover:cursor-pointer border p-2 rounded-md w-[60px] text-center"
);
