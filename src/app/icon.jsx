import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#18211f',
          color: '#f2f0e9',
          fontFamily: 'sans-serif',
          fontWeight: 800,
          fontSize: 22,
        }}
      >
        L<span style={{ color: '#e66547' }}>.</span>
      </div>
    ),
    { ...size }
  )
}
