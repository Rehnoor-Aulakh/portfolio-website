import { ImageResponse } from 'next/og'

export const alt = 'Loom Digital — AI Agents, Chatbots & Web Development Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#f2f0e9',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 44,
            fontWeight: 800,
            color: '#18211f',
            marginBottom: 28,
          }}
        >
          Loom<span style={{ color: '#e66547' }}>.</span>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#18211f',
            maxWidth: 980,
          }}
        >
          We build AI agents, chatbots &amp; web apps that work.
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 28,
            color: '#5b5a52',
          }}
        >
          Independent AI &amp; digital studio · USA · UK · EU · Australia
        </div>
      </div>
    ),
    { ...size }
  )
}
