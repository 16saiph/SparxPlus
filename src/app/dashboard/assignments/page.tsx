import { DashboardLayout } from '@/components/DashboardLayout'
import { Play, Trash2 } from 'lucide-react'

export default function AssignmentsPage() {
  return (
    <DashboardLayout>
      <div>
        <h1
          className="text-4xl font-black mb-8"
          style={{ color: 'var(--text-primary)' }}
        >
          Your Assignments
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { platform: 'Sparx Maths', title: 'Algebra Module 5', questions: 15, status: 'Ready', progress: 0 },
            { platform: 'Sparx Reader', title: 'Chapter 6 - Comprehension', questions: 8, status: 'In Progress', progress: 60 },
            { platform: 'Tassomai', title: 'Biology Quiz', questions: 20, status: 'Ready', progress: 0 },
            { platform: 'Carousel Learning', title: 'French Vocabulary', questions: 12, status: 'Completed', progress: 100 },
          ].map((assignment, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border glow"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    {assignment.platform}
                  </p>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {assignment.title}
                  </h3>
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: assignment.status === 'Ready' ? 'rgba(59, 130, 246, 0.2)' : 
                                    assignment.status === 'In Progress' ? 'rgba(245, 158, 11, 0.2)' :
                                    'rgba(16, 185, 129, 0.2)',
                    color: assignment.status === 'Ready' ? 'var(--accent-secondary)' :
                           assignment.status === 'In Progress' ? '#f59e0b' : 'var(--accent-primary)',
                  }}
                >
                  {assignment.status}
                </span>
              </div>

              <p
                className="text-sm mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                {assignment.questions} questions • {assignment.progress}% complete
              </p>

              {/* Progress Bar */}
              <div
                className="w-full h-2 rounded-full mb-4 overflow-hidden"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <div
                  className="h-full transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--accent-primary)',
                    width: `${assignment.progress}%`,
                  }}
                />
              </div>

              <div className="flex gap-2">
                <button
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-semibold glow"
                  style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white',
                  }}
                >
                  <Play size={16} />
                  <span>{assignment.status === 'Completed' ? 'Review' : 'Solve'}</span>
                </button>
                <button
                  className="px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
