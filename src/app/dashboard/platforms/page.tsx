import { DashboardLayout } from '@/components/DashboardLayout'
import { Unlink, Check } from 'lucide-react'

export default function PlatformsPage() {
  return (
    <DashboardLayout>
      <div>
        <h1
          className="text-4xl font-black mb-8"
          style={{ color: 'var(--text-primary)' }}
        >
          Connected Platforms
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: 'Sparx Maths', connected: true, lastSync: '5 mins ago', tasks: 42 },
            { name: 'Sparx Reader', connected: true, lastSync: '30 mins ago', tasks: 8 },
            { name: 'Tassomai', connected: false, lastSync: null, tasks: 0 },
            { name: 'Carousel Learning', connected: true, lastSync: '2 hours ago', tasks: 15 },
            { name: 'Bedrock Learning', connected: false, lastSync: null, tasks: 0 },
            { name: 'Other Platforms', connected: false, lastSync: null, tasks: 0 },
          ].map((platform, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-lg font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {platform.name}
                </h3>
                {platform.connected && (
                  <div
                    className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.2)',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    <Check size={16} />
                    <span>Connected</span>
                  </div>
                )}
              </div>

              {platform.connected && (
                <>
                  <p
                    className="text-sm mb-4"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Last synced: {platform.lastSync} • {platform.tasks} tasks available
                  </p>
                  <button
                    className="flex items-center justify-center space-x-2 w-full px-4 py-2 rounded-lg border"
                    style={{
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Unlink size={18} />
                    <span>Disconnect</span>
                  </button>
                </>
              )}

              {!platform.connected && (
                <>
                  <p
                    className="text-sm mb-4"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Connect your account to start automating homework for this platform.
                  </p>
                  <button
                    className="w-full px-4 py-2 rounded-lg font-semibold glow"
                    style={{
                      backgroundColor: 'var(--accent-primary)',
                      color: 'white',
                    }}
                  >
                    Connect Account
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
