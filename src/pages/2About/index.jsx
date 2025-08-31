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

  const onRichTextChange = (e) => setRichText(e.target.value);

  // sanitize whenever richText changes
  const safeHtml = useMemo(() => DOMPurify.sanitize(richText), [richText]);

  useEffect(() => {
    const splitRichText = richText.split("</div>");
    const nestedSplit = splitRichText.map((item) => item.split('">'));
    setHTMLText(nestedSplit);
  }, [richText]);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center max-w-[800px]"
      id={routesFlat.about}
    >
      <Tabs onTextBodyChange={onTextBodyChange} textDisplay={textDisplay} />
      <div className="w-full h-[500px] flex justify-center">
        {textDisplay === "DOM" && (
          <div
            className="h-full text-lg max-h-[460px] overflow-scroll pr-4"
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          />
        )}
        {textDisplay === "<HTML />" && (
          <div className="shadow-md bg-text/10 p-10 rounded-md max-h-[500px] overflow-scroll">
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
