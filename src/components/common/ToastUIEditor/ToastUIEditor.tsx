/* eslint-disable import/no-unresolved */
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'

import { useRef } from 'react'

import { Editor } from '@toast-ui/react-editor'

const ToastUIEditor = () => {
  const editorRef = useRef<Editor>(null)

  const handleChange = () => {
    if (!editorRef.current) {
      return
    }

    const contentHtml = editorRef.current.getInstance().getHTML()
  }

  return (
    <Editor
      ref={editorRef}
      onChange={handleChange}
      placeholder='내용을 입력해주세요.'
      // initialValue='내용을 입력해주세요.'
      previewStyle='vertical'
      height='600px'
      initialEditType='wysiwyg'
      initialValue=' '
      useCommandShortcut={true}
      usageStatistics={false}
      theme='dark'
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        // ['code', 'codeblock'],
      ]}
    />
  )
}

export default ToastUIEditor
