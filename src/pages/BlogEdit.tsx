import React, {useState, useEffect, useCallback} from 'react';
import { Col, Row } from 'antd';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import { PageContainer } from '@ant-design/pro-layout';
import marked from 'marked';
import ProForm, {
  ProFormText,
  ProFormTextArea,
  ProFormSelect,
  ProFormGroup,
} from '@ant-design/pro-form';

const BlogEdit = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('')
  const buildArticleContent = useCallback(() => {
    const renderer = new marked.Renderer()
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: false,
      smartLists: true,
      smartypants: false,
      highlight: (code) => {
        return hljs.highlightAuto(code).value
      }
    })
  }, [])

  useEffect(() => {
    buildArticleContent()
  }, [buildArticleContent])
  
  return (
    <PageContainer>
  <div
    style={{
      padding: 24,
      background: '#fff'
    }}
  >
    <ProForm
      name="blogForm"
      onValuesChange={(_, values) => {
        if (values.content !== '') {
          const html=marked(values.content)
          setMarkdownContent(html)
        }
      }}
      onFinish={async (value) => console.log(value)}
    >
      <ProFormGroup
        label="博客标签"
      >
        <ProFormSelect
          name="select-multiple"
          label="选择博客标签"
          valueEnum={{
            red: 'Vue',
            green: 'React',
            blue: 'HTML5',
            css: 'CSS3',
            canvas: 'Canvas',
            svg: 'SVG'
          }}
          fieldProps={{
            mode: 'multiple',
          }}
          placeholder="请选择博客标签"
          rules={[
            { required: true, message: '请选择博客标签!', type: 'array' },
          ]}
        />
      </ProFormGroup>
      <ProFormGroup label="标题">
        <ProFormText
          width="md"
          name="title"
          label="博客标题"
          placeholder="请输入博客标题"
          rules={[{ required: true, message: '请填写博客标题!' }]}
        />
        <ProFormTextArea width="md" name="desc" label="简介" placeholder="请输入博客简介"/>
      </ProFormGroup>
        <Row>
          <Col className="gutter-row" span={12}>
            <ProFormGroup
              label="内容"
            >
              <ProFormTextArea
                name="content"
                label="正文"
                placeholder="请输入博客内容"
                rules={[{ required: true, message: '请填写博客正文!' }]}
                fieldProps={{rows: 35, cols: 100}}
                />
            </ProFormGroup>
          </Col>
          <Col className="gutter-row" span={11} offset={1}>
            <ProFormGroup
              label="预览"
            >
            <div
              style={{border: '1px', height: '500px', overflow: 'auto'}}
              dangerouslySetInnerHTML = {{__html:markdownContent}} 
            />
            </ProFormGroup>
          </Col>
        </Row>
    </ProForm>
  </div>
  </PageContainer>
  )
};

export default BlogEdit