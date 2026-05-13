import { DashboardLayout } from '@/components/DashboardLayout'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <h1
          className="text-4xl font-black mb-8"
          style={{ color: 'var(--text-primary)' }}
        >
          Welcome Back
        </h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Assignments Completed', value: '42', icon: '✓' },
            { label: 'Time Saved', value: '16h', icon: '⏱' },
            { label: 'Current Streak', value: '7 days', icon: '🔥' },
            { label: 'Success Rate', value: '98%', icon: '⭐' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border glow"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div
                className="text-2xl font-bold mb-1"
                style={{ color: 'var(--accent-primary)' }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div
          className="rounded-xl border p-6 glow"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-color)',
          }}
        >
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[
              { task: 'Sparx Maths - Algebra Module', status: 'Completed', time: '2 hours ago' },
              { task: 'Sparx Reader - Chapter 5', status: 'In Progress', time: '30 mins ago' },
              { task: 'Tassomai - Biology Quiz', status: 'Completed', time: '1 day ago' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-lg border"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.task}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.time}
                  </p>
                </div>
                <div
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: item.status === 'Completed' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                    color: item.status === 'Completed' ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                  }}
                >
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
