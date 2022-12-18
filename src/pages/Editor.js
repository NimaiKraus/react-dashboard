import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  Toolbar,
  QuickToolbar,
  RichTextEditorComponent,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummy";
import Header from "../components/Header";

function Editor() {
  return (
    <div className="mt-24 m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category={'app'} title={'Editor'} />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Image, Link, Toolbar, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default Editor;
