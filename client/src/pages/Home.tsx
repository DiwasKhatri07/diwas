import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Eye } from "lucide-react";

/**
 * Diwas Portfolio
 * Simple, clean portfolio with:
 * - GIF background animation
 * - Profile information
 * - Visitor counter (fake total + live online users)
 * - Social/contact links
 * - Click-to-contact button
 */
export default function Home() {
  const [totalVisitors, setTotalVisitors] = useState(2847);
  const [onlineUsers, setOnlineUsers] = useState(5);

  // Simulate visitor count updates every 12 hours
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalVisitors((prev) => prev + Math.floor(Math.random() * 500) + 200);
      setOnlineUsers(Math.floor(Math.random() * 9) + 2);
    }, 12 * 60 * 60 * 1000); // 12 hours

    return () => clearInterval(interval);
  }, []);

  // Update online users more frequently for realism
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers(Math.floor(Math.random() * 9) + 2);
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const links = [
    {
      label: "GitHub",
      url: "https://github.com/DiwasKhatri07",
      icon: "💻",
    },
    {
      label: "Web",
      url: "https://guns.lol/diwaskhatri",
      icon: "🌐",
    },
    {
      label: "Coffee ☕",
      url: "https://buymeacoffee.com/diwaskhatri",
      icon: "☕",
    },
    {
      label: "Open Collective",
      url: "https://opencollective.com/diwas",
      icon: "🤝",
    },
  ];

  const channels = [
    {
      name: "Main Channel",
      url: "https://t.me/+u4Sw7SGYIA5hNjU1",
    },
    {
      name: "Drop Channel",
      url: "https://t.me/+EJW-Je6FiKhlNzQ1",
    },
    {
      name: "Backup Channel",
      url: "https://t.me/+GdyIpU_iiuY0ZGY1",
    },
    {
      name: "Group Chat",
      url: "https://t.me/+i5RQuIPyXmZjZjZl",
    },
  ];

  const contacts = [
    {
      name: "DM",
      url: "https://t.me/diwazz",
    },
    {
      name: "Bot",
      url: "https://t.me/AgentXManager_Bot",
    },
    {
      name: "Owner",
      url: "https://t.me/RarXgod",
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden"
      style={{
        backgroundImage: "url('/manus-storage/background_c43c928c.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              XEBEC | SP 🇪🇸 💎
            </h1>
            <p className="text-white/80 text-lg">Portfolio & Contact Hub</p>
          </div>

          {/* Profile Info */}
          <div className="space-y-4 mb-8 text-white/90 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-semibold min-w-fit">[π] Handle:</span>
              <span>@diwazz ✅</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-semibold min-w-fit">[π] Age:</span>
              <span>14</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-semibold min-w-fit">[π] Location:</span>
              <span>Nepal 🇳🇵</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-semibold min-w-fit">[π] Role:</span>
              <span>👩‍💻 Student & Learner 📚</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-semibold min-w-fit">[π] Status:</span>
              <span>Still Learning... 🚀</span>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8 bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="text-blue-400">[π]</span> Skills
            </h3>
            <div className="grid grid-cols-2 gap-2 text-white/80 text-sm">
              <div>Python: 30%</div>
              <div>Java: Learning</div>
              <div>PHP: Learning</div>
              <div>C++: Learning</div>
              <div>HTML: Basic</div>
              <div>JavaScript: 3%</div>
            </div>
          </div>

          {/* Currently Learning */}
          <div className="mb-8 bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="text-blue-400">[π]</span> Currently Learning 📖
            </h3>
            <p className="text-white/80 text-sm">Python Full Stack | Java</p>
          </div>

          {/* Setup */}
          <div className="mb-8 bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="text-blue-400">[π]</span> Setup 📱
            </h3>
            <p className="text-white/80 text-sm">
              Android | Termux | Pydroid | VS Code | Python 3.13 🖥
            </p>
          </div>

          {/* Visitor Counter */}
          <div className="mb-8 grid grid-cols-2 gap-4">
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-blue-300" />
                <span className="text-white/70 text-sm">Total Visitors</span>
              </div>
              <div className="text-3xl font-bold text-blue-300">
                {totalVisitors.toLocaleString()}
              </div>
            </div>
            <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-green-300" />
                <span className="text-white/70 text-sm">Online Now</span>
              </div>
              <div className="text-3xl font-bold text-green-300">{onlineUsers}</div>
            </div>
          </div>

          {/* Links Section */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-blue-400">[π]</span> My Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg p-3 text-white text-sm font-medium transition-all duration-200 flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Channels */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-blue-400">[π]</span> My Channels
            </h3>
            <div className="space-y-2">
              {channels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg p-3 text-white text-sm font-medium transition-all duration-200 flex items-center justify-between group"
                >
                  <span>↳ {channel.name}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-blue-400">[π]</span> Contact
            </h3>
            <div className="space-y-2">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg p-3 text-white text-sm font-medium transition-all duration-200 flex items-center justify-between group"
                >
                  <span>↳ {contact.name}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a href="https://t.me/diwazz" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Click Me → Message on Telegram
              </Button>
            </a>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-white/60 text-xs">
              Owner:{" "}
              <a
                href="https://t.me/RarXgod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                @RarXgod ✅
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
