import { DashboardLayout } from '@/components/DashboardLayout'
import { Eye, Download } from 'lucide-react'

export default function HistoryPage() {
  return (
    <DashboardLayout>
      <div>
        <h1
          className="text-4xl font-black mb-8"
          style={{ color: 'var(--text-primary)' }}
        >
          Assignment History
        </h1>

        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--border-color)' }}>
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <th className="px-6 py-4 text-left font-bold" style={{ color: 'var(--text-primary)' }}>
                  Assignment
                </th>
                <th className="px-6 py-4 text-left font-bold" style={{ color: 'var(--text-primary)' }}>
                  Platform
                </th>
                <th className="px-6 py-4 text-left font-bold" style={{ color: 'var(--text-primary)' }}>
                  Completed
                </th>
                <th className="px-6 py-4 text-left font-bold" style={{ color: 'var(--text-primary)' }}>
                  Score
                </th>
                <th className="px-6 py-4 text-left font-bold" style={{ color: 'var(--text-primary)' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { assignment: 'Algebra Module 5', platform: 'Sparx Maths', date: 'May 12, 2024', score: '95%' },
                { assignment: 'Chapter 5 - Comprehension', platform: 'Sparx Reader', date: 'May 12, 2024', score: '88%' },
                { assignment: 'Biology Quiz', platform: 'Tassomai', date: 'May 11, 2024', score: '92%' },
                { assignment: 'French Vocabulary', platform: 'Carousel Learning', date: 'May 11, 2024', score: '100%' },
                { assignment: 'History Essay', platform: 'Bedrock Learning', date: 'May 10, 2024', score: '85%' },
              ].map((entry, i) => (
                <tr
                  key={i}
                  style={{
                    backgroundColor: i % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                    borderBottomColor: 'var(--border-color)',
                  }}
                  className="border-b"
                >
                  <td className="px-6 py-4" style={{ color: 'var(--text-primary)' }}>
                    {entry.assignment}
                  </td>
                  <td className="px-6 py-4" style={{ color: 'var(--text-secondary)' }}>
                    {entry.platform}
                  </td>
                  <td className="px-6 py-4" style={{ color: 'var(--text-secondary)' }}>
                    {entry.date}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="px-3 py-1 rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {entry.score}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        className="p-2 rounded-lg hover:opacity-70"
                        style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:opacity-70"
                        style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
                      >
                        <Download size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}
