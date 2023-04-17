/* eslint-disable import/no-unresolved */
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'

import { Dispatch, SetStateAction, useRef } from 'react'

import { Editor } from '@toast-ui/react-editor'

import { s3ImageUpload } from '@/services/api/aws'

interface Props {
  setContent: Dispatch<SetStateAction<string>>
}

const ToastUIEditor = ({ setContent }: Props) => {
  const editorRef = useRef<Editor>(null)

  const handleChange = () => {
    const content = editorRef.current?.getInstance().getHTML()
    if (!content) {
      return
    }

    setContent(content)
  }

  const onUploadImage = async (blob: File, callback) => {
    console.log(blob)
    const formData = new FormData()
    formData.append('file', blob)
    const url = await s3ImageUpload(formData)
    callback(url, 'alt text')
    return false
  }

  return (
    <Editor
      ref={editorRef}
      onChange={handleChange}
      placeholder='내용을 입력해주세요.'
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
      ]}
      hooks={{
        addImageBlobHook: onUploadImage,
      }}
    />
  )
}

export default ToastUIEditor
