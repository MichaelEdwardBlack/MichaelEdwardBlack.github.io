import React, { useEffect, useRef } from "react";
import "./MarkdownPage.css";

async function getTextFromFile(file: string) {
  let response = await fetch(file);
  if (response.status !== 200) throw response;

  let text = await response.text();
  return text;
}

async function fetchMarkdownPage(text: string) {
  let response = await fetch("https://api.github.com/markdown", {
    method: "POST",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
    body: JSON.stringify({ text: text }),
  });
  if (response.status !== 200) throw response;

  let markdown = await response.text();
  return markdown;
}

export type MardownPageProps = React.HTMLAttributes<HTMLDivElement> & {
  file?: string;
};

export const MarkdownPage = (props: MardownPageProps) => {
  const page = useRef<HTMLDivElement>(null);

  const fetchAndSetPageMarkdown = async () => {
    if (page.current && props.file) {
      const text = await getTextFromFile(props.file);
      const md = await fetchMarkdownPage(text);
      page.current.innerHTML = md;
    }
  };
  useEffect(() => {
    fetchAndSetPageMarkdown();
  });

  return <div ref={page} {...props}></div>;
};
