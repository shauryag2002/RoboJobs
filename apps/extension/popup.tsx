import { useState } from "react"

export default function IndexPopup() {
  // Persist resume and cover letter across popup closes
  const [resume, setResume] = useState("")
  const [coverLetter, setCoverLetter] = useState("")
  const [status, setStatus] = useState<string | null>(null)

  const handleApply = async () => {
    setStatus("Applying...")
    // TODO: Send message to content script or background worker
    console.log("Applying with:", { resume, coverLetter })
    setStatus("Applied successfully!")
  }

  return (
    <div
      style={{
        width: 360,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        fontFamily: "system-ui, sans-serif"
      }}>
      <h2 style={{ margin: 0, fontSize: 18, color: "#111" }}>roboJobs Auto-Apply</h2>

      <label style={{ fontSize: 12, fontWeight: 600 }}>Resume / Bio</label>
      <textarea
        rows={4}
        placeholder="Paste resume or summary..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
      />

      <label style={{ fontSize: 12, fontWeight: 600 }}>Cover Letter Template</label>
      <textarea
        rows={4}
        placeholder="Paste cover letter template..."
        value={coverLetter}
        onChange={(e) => setCoverLetter(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
      />



      {status ? <span style={{ fontSize: 12, color: "#16a34a" }}>{status}</span> : <button
        onClick={handleApply}
        style={{
          padding: "10px 16px",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontWeight: 600
        }}>
        Apply on Current Page
      </button>}
    </div>
  )
}
