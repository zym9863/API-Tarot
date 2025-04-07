import { useState } from 'react'
import { Card, Button, Input, message, Spin } from 'antd'
import { CloudOutlined, StarOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import axios from 'axios'
import './App.css'

const API_MODELS = [
  'google/gemini-2.0-flash-thinking-exp:free',
  'google/gemini-2.0-flash-exp:free',
  'google/gemma-3-27b-it:free'
]

function App() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [question, setQuestion] = useState('')
  const [apiKey, setApiKey] = useState('')

  const performDivination = async () => {
    if (!apiKey) {
      message.error('请输入OpenRouter API Key')
      return
    }
    if (!question) {
      message.error('请输入您想占卜的问题')
      return
    }

    setLoading(true)
    const randomModel = API_MODELS[Math.floor(Math.random() * API_MODELS.length)]

    try {
      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: randomModel,
          messages: [
            {
              role: 'user',
              content: question
            }
          ]
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      )

      setResult(`使用模型: ${randomModel}\n\n${response.data.choices[0].message.content}`)
    } catch (error) {
      message.error('占卜失败，请检查API Key是否正确')
      console.error('API调用错误:', error)
    } finally {
      setLoading(false)
    }
  }

  // 生成随机星星
  const generateStars = () => {
    const stars = [];
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 2}s`
      };
      stars.push(<div key={i} className="star" style={style} />);
    }
    
    return stars;
  };

  return (
    <div className="app-container">
      <div className="stars-container">
        {generateStars()}
      </div>
      
      <div className="mystical-symbols left-symbols">
        <div className="symbol moon" />
        <div className="symbol star-symbol" />
      </div>
      
      <div className="mystical-symbols right-symbols">
        <div className="symbol tarot-symbol" />
        <div className="symbol crystal-symbol" />
      </div>
      
      <Card title={<><StarOutlined /> API 塔罗占卜 <StarOutlined /></>} className="tarot-card">
        <Input.Password
          placeholder="请输入OpenRouter API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          style={{ marginBottom: 16 }}
          prefix={<QuestionCircleOutlined style={{ color: '#6C4BED' }} />}
        />
        <Input.TextArea
          placeholder="请输入您想占卜的问题"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ marginBottom: 16 }}
          rows={4}
        />
        <Button
          type="primary"
          icon={<CloudOutlined />}
          onClick={performDivination}
          loading={loading}
          block
        >
          ✧ 开始神秘占卜 ✧
        </Button>
        {loading && (
          <div className="loading-container">
            <Spin size="large" />
            <p>✧ 正在连接宇宙能量，解读命运密码... ✧</p>
          </div>
        )}
        {result && (
          <Card className="result-card" title="占卜结果">
            <pre>{result}</pre>
          </Card>
        )}
      </Card>
    </div>
  )
}

export default App
