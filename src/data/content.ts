import {
  Smartphone,
  Brain,
  Radio,
  MessageCircle,
  Users,
  UserPlus,
  Reply,
  Keyboard,
  Pin,
  Database,
  Layers,
  RadioReceiver,
  Trash2,
  RefreshCw,
  Shield,
  Camera,
  Bell,
  Globe,
  Bot,
  Gamepad2,
  Cloud,
  GitBranch,
  Boxes,
  type LucideIcon,
} from 'lucide-react'

import { assetUrl } from '../lib/assets'

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'email'
  | 'instagram'
  | 'whatsapp'

export const developer = {
  name: 'Vishwarajsinh Chudasama',
  shortName: 'Vishwarajsinh', // Updated shortName
  fullName: 'Vishwarajsinh Chudasama', // Added fullName
  initials: 'VC',
  brand: 'VLabs',
  brandTagline: 'Advanced Android · AI · Realtime Systems',
  role: 'Android & Realtime Systems Developer',
  education: 'MCA · Computer Science',
  location: 'India',
  email: 'raavishvarajsinh9@gmail.com',
  profileImage: assetUrl('profile.jpeg'),
  profileImageFallback: assetUrl('images/profile-placeholder.svg'),
  tagline:
    'I build advanced Android apps and modern websites using AI-assisted workflows — merging architecture thinking, creativity, and intelligent tooling to ship scalable realtime systems faster.',
  bio: [
    'I am Vishwarajsinh Chudasama — an ambitious MCA / Computer Science engineer who treats every project like a product launch. I combine Android engineering, Firebase realtime architectures, and AI-powered development to move from concept to production with clarity and speed.',
    'My workflow is modern by design: I use AI-assisted tooling to accelerate implementation while keeping architecture, code quality, and system stability non-negotiable. Creativity drives the experience; engineering discipline makes it scale.',
    'Through VLabs, I build advanced Android applications and polished web experiences — with a deep focus on realtime communication, modular manager/helper patterns, and Firebase backends that behave reliably under real user load.',
    'VChat is my flagship proof of that approach: a stabilization-first messenger with group chats, social graphs, reply/forward flows, typing indicators, pinned messages, and live Firestore listeners — engineered in Java for production-grade performance.',
  ],
  approach: [
    {
      title: 'AI-Assisted Velocity',
      description: 'Leverage intelligent dev workflows to prototype, refactor, and ship faster — without sacrificing structure.',
    },
    {
      title: 'Architecture First',
      description: 'Modular managers, clear data models, and lifecycle-safe listeners before UI polish.',
    },
    {
      title: 'Realtime by Default',
      description: 'Firebase Firestore sync, presence, and messaging patterns built for live user experiences.',
    },
  ],
  focusAreas: [
    'Android Engineering',
    'AI-Powered Development',
    'Realtime Systems',
    'Firebase Architecture',
  ],
}

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'VChat', href: '#vchat' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Future', href: '#future' },
  { label: 'Stack', href: '#stack' },
  { label: 'Feedback', href: '#contact' },
]

// APK Download URL
export const APK_DOWNLOAD_URL =
  'https://github.com/Vlabs99/Vchat/releases/download/v1.0/app-debug.apk' // Update with actual APK download link

// heroStats has been removed as it's no longer used in the simplified hero section.

export const skills: { name: string; level: number; category: string; note?: string }[] = [
  // ... existing skills ...
]

export const vchatProject = {
  name: 'VChat',
  version: 'Production Build',
  status: 'Active Development',
  summary:
    'A realtime Android messenger engineered in Java with Firebase — designed around modular managers, live Firestore listeners, and stabilization-first patterns used in production messaging apps.',
  inspiration: 'WhatsApp · Instagram DMs · Messenger',
  stats: [
    { label: 'Architecture', value: 'Manager / Helper', detail: 'Modular Java layers' },
    { label: 'Database', value: 'Firestore', detail: 'Realtime listeners' },
    { label: 'Auth & Media', value: 'Firebase', detail: 'Auth + Storage' },
    { label: 'Focus', value: 'Stability', detail: 'Delete / reopen lifecycle' },
  ],
  techBadges: [
    'Java',
    'Android Studio',
    'Firestore',
    'Firebase Auth',
    'Firebase Storage',
    'Realtime Listeners',
    'Material Design',
  ],
}

export const vchatFeatures: {
  icon: LucideIcon
  title: string
  description: string
  highlight?: string
}[] = [
  {
    icon: MessageCircle,
    title: 'Realtime Messaging',
    description:
      'Live message delivery via Firestore snapshot listeners with optimized read paths and UI refresh on every document change.',
    highlight: 'Core',
  },
  {
    icon: Users,
    title: 'Group Chats',
    description:
      'Multi-member conversations with participant management, shared message threads, and group-specific Firestore collections.',
    highlight: 'Social',
  },
  {
    icon: UserPlus,
    title: 'Friend System',
    description:
      'Request, accept, and manage connections with dedicated friend documents — enabling controlled 1:1 chat initiation.',
    highlight: 'Social',
  },
  {
    icon: Reply,
    title: 'Reply & Forward',
    description:
      'Thread context preserved through reply metadata; forward flow replicates message payloads across conversations.',
    highlight: 'UX',
  },
  {
    icon: Keyboard,
    title: 'Typing Indicators',
    description:
      'Ephemeral typing state written to Firestore and cleared on timeout — giving users live conversation feedback.',
    highlight: 'Realtime',
  },
  {
    icon: Pin,
    title: 'Pinned Messages',
    description:
      'Important messages surfaced at the top of a chat with persistent pin flags synced across sessions.',
    highlight: 'UX',
  },
  {
    icon: Camera,
    title: 'Media Pipeline',
    description:
      'Images and attachments uploaded through Firebase Storage with download URLs bound to message documents.',
    highlight: 'Media',
  },
  {
    icon: Bell,
    title: 'Notification Layer',
    description:
      'In-app and system notification hooks tied to new message events and conversation updates.',
    highlight: 'System',
  },
  {
    icon: Shield,
    title: 'Firebase Authentication',
    description:
      'Secure sign-in flows with session-aware navigation and user-scoped Firestore security boundaries.',
    highlight: 'Security',
  },
  {
    icon: RadioReceiver,
    title: 'Realtime Firestore Listeners',
    description:
      'Dedicated listener registration per screen — chats, friends, and typing channels stay live without polling.',
    highlight: 'Core',
  },
  {
    icon: Trash2,
    title: 'Delete / Reopen Lifecycle',
    description:
      'Conversations support soft-delete and reopen flows so UI state, listeners, and caches stay consistent on return.',
    highlight: 'Stability',
  },
  {
    icon: RefreshCw,
    title: 'Stabilization Architecture',
    description:
      'Engineered for crash resistance: listener cleanup, state restoration, and defensive handling on activity recreation.',
    highlight: 'Stability',
  },
]

export const vchatArchitecture: {
  icon: LucideIcon
  title: string
  description: string
  layer: string
}[] = [
  {
    icon: Layers,
    title: 'Modular Manager Layer',
    description:
      'ChatManager, FriendManager, GroupManager, and helper classes isolate Firestore operations from Activities and Fragments.',
    layer: 'Application',
  },
  {
    icon: Database,
    title: 'Firebase Data Model',
    description:
      'Structured collections for users, chats, messages, friends, typing indicators, and pins — designed for query efficiency.',
    layer: 'Backend',
  },
  {
    icon: Radio,
    title: 'Realtime Listener Hub',
    description:
      'Per-conversation SnapshotListeners attach and detach with lifecycle — preventing leaks and duplicate updates.',
    layer: 'Sync',
  },
  {
    icon: Boxes,
    title: 'Helper Utilities',
    description:
      'Reusable helpers for timestamps, message formatting, media uploads, and error normalization across the app.',
    layer: 'Utilities',
  },
  {
    icon: GitBranch,
    title: 'Delete / Reopen Flow',
    description:
      'Chat deletion updates Firestore flags; reopening rebinds listeners and rebuilds local adapter state from snapshots.',
    layer: 'Lifecycle',
  },
]

export const vchatManagers = [
  'ChatManager',
  'MessageManager',
  'FriendManager',
  'GroupChatManager',
  'TypingIndicatorManager',
  'PinMessageManager',
  'MediaUploadHelper',
  'FirestoreListenerHelper',
]

export const futureProjects: {
  icon: LucideIcon
  title: string
  description: string
  status: string
  tags: string[]
}[] = [
  {
    icon: Bot,
    title: 'VChat AI Replies',
    description:
      'Context-aware smart replies inside conversations using on-device or cloud LLM integration — extending VChat beyond static messaging.',
    status: 'Research',
    tags: ['AI', 'VChat', 'Android'],
  },
  {
    icon: Globe,
    title: 'VChat Web Companion',
    description:
      'Browser-based client sharing the same Firestore schema — enabling cross-device messaging without rebuilding the backend.',
    status: 'Planned',
    tags: ['React', 'Firestore', 'PWA'],
  },
  {
    icon: Cloud,
    title: 'VLabs Cloud Toolkit',
    description:
      'Reusable Firebase abstraction layer extracted from VChat — managers, listeners, and auth patterns as a standalone module.',
    status: 'Planned',
    tags: ['Firebase', 'Library', 'Java'],
  },
  {
    icon: Gamepad2,
    title: 'Realtime Mini-Apps',
    description:
      'Embedded interactive cards inside chat threads — polls, shared boards, and lightweight games over Firestore events.',
    status: 'Concept',
    tags: ['Realtime', 'UX', 'Social'],
  },
]

export const techStack: { name: string; category: string; usedIn: string }[] = [
  { name: 'Java', category: 'Language', usedIn: 'VChat core' },
  { name: 'Android Studio', category: 'IDE', usedIn: 'Build & debug' },
  { name: 'Firebase Firestore', category: 'Database', usedIn: 'Realtime data' },
  { name: 'Firebase Auth', category: 'Security', usedIn: 'User sessions' },
  { name: 'Firebase Storage', category: 'Cloud', usedIn: 'Media files' },
  { name: 'Material Design 3', category: 'UI', usedIn: 'App interface' },
  { name: 'Gradle', category: 'Build', usedIn: 'APK pipeline' },
  { name: 'Git', category: 'Version Control', usedIn: 'All projects' },
]

export const expertiseAreas: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Smartphone,
    title: 'Advanced Android Engineering',
    description:
      'Production-style Java apps with Material Design, modular managers, and performance tuned for real devices — from VChat to future VLabs products.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Development',
    description:
      'AI-assisted workflows that accelerate building modern websites and Android features — smart iteration, faster delivery, intelligent problem-solving.',
  },
  {
    icon: Radio,
    title: 'Realtime & Firebase Systems',
    description:
      'Firestore architectures, live listeners, auth, and storage pipelines engineered for messaging, presence, and scalable mobile backends.',
  },
]

export const socialLinks: {
  platform: SocialPlatform
  label: string
  href: string
  handle: string
}[] = [
  {
    platform: 'email',
    label: 'Email',
    href: `mailto:${developer.email}`,
    handle: developer.email,
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vishvarajsinh-chudasama-07162a363/',
    handle: 'vishvarajsinh-chudasama',
  },
  {
    platform: 'github',
    label: 'GitHub',
    href: 'https://github.com/Vlabs99',
    handle: 'Vlabs99',
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/chudasama_vishwarajsinh_9/',
    handle: 'chudasama_vishwarajsinh_9',
  },
  {
    platform: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/919408280568',
    handle: '+91 94082 80568',
  },
]
export const vchatGallery = [
  {
    title: 'Splash Screen',
    description: 'Modern VChat startup screen with branding and loading experience.',
    image: '/screenshots/vchat-splash.jpeg',
  },
  {
    title: 'Chat Sessions',
    description: 'Realtime conversation list with active chats and recent messages.',
    image: '/screenshots/vchat-chat-list.jpeg',
  },
  {
    title: 'Private Chat',
    description: 'Direct realtime messaging with reply and typing support.',
    image: '/screenshots/vchat-private-chat.jpeg',
  },
  {
    title: 'Group Settings',
    description: 'Manage group members, permissions, and chat customization.',
    image: '/screenshots/vchat-group-setting.jpeg',
  },
  {
    title: 'Group Chat',
    description: 'Realtime multi-user group communication powered by Firestore.',
    image: '/screenshots/vchat-group-chat.jpeg',
  },
  {
    title: 'User Profile',
    description: 'Personal profile system with user information and customization.',
    image: '/screenshots/vchat-profile.jpeg',
  },
  {
    title: 'User Search',
    description: 'Search users with email and connect instantly.',
    image: '/screenshots/vchat-user-search.jpeg',
  },
]

export const academicsData = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    university: 'Veer Narmad South Gujarat University',
    institution: 'Department of Computer Science',
    location: 'Surat, Gujarat',
    duration: '2025 - Present',
    currentSemester: '3',
    semesters: [
      {
        semester: 'Semester 1',
        subjects: [
          { name: 'Cloud Computing', url: 'https://drive.google.com/file/d/1tvR5-T7KK-fH4DQgsfflInQrDJG3VRVW/view?usp=sharing' },
          { name: 'Computer Networks', url: 'https://drive.google.com/file/d/1LJjvD532E-4MVh-btIPjCq1FUcG-QlTi/view?usp=sharing' },
          { name: 'Data Structures and Algorithms', url: 'https://drive.google.com/file/d/1YUUfr9SbxWa53hiMMtc2Z9tHuzc6t3xr/view?usp=sharing' },
          { name: 'Database Management Systems', url: 'https://drive.google.com/file/d/1apht-Z8zIjP1jXGyC6sS9tJSNJOpn34r/view?usp=sharing' },
          { name: 'Object Oriented Programming', url: 'https://drive.google.com/file/d/1_m6ggX3e9WEALQCLi3pKQOWAF5A2vwBC/view?usp=sharing' },
        ],
        zipUrl: 'https://drive.google.com/file/d/1hUdhM49kn2pP2HgDYb5KscrOQapRWUmQ/view?usp=sharing',
      },
      {
        semester: 'Semester 2',
        subjects: [
          { name: 'Android Development', url: 'https://drive.google.com/file/d/1prp-3sbE9ryk5ZTBVGVIQSF3dlsUvIvq/view?usp=sharing' },
          { name: 'Artificial Intelligence', url: 'https://drive.google.com/file/d/11EycYn_6qRKdt7XJOTnqb4VJYH7ED-XG/view?usp=sharing' },
          { name: 'Assignments', url: 'https://drive.google.com/file/d/1YMuRnAIbv0CuGwwuSbzXvtTxmI919pNk/view?usp=sharing' },
          { name: 'Frontend Development', url: 'https://drive.google.com/file/d/1t2qmxqvQSExlqhQ7i8qSkw9YjDS5o2H1/view?usp=sharing' },
          { name: 'NET Technology', url: 'https://drive.google.com/file/d/1x6YHnRX9E8pbYRCKhNjyyIQfppl99wl6/view?usp=sharing' },
          { name: 'Python Programming', url: 'https://drive.google.com/file/d/1ArDVv_9pcoMAYGGv5uVsxTSldUle6CCg/view?usp=sharing' },
        ],
        zipUrl: 'https://drive.google.com/file/d/1W0MBL71U7Fh2_jI5VGQWoW7pn9DNzdSE/view?usp=sharing',
      },
      {
        semester: 'Question Papers',
        subjects: [
          { name: 'Semester 1', url: 'https://drive.google.com/file/d/1KGUi6EQMfZSEEL337_Wa250QDU56zX7s/view?usp=sharing' },
          { name: 'Semester 2', url: 'https://drive.google.com/file/d/1gPISk4OVfW7r7ew3VeIj09UlgAsLBzy4/view?usp=sharing' },
        ],
        zipUrl: undefined
      }
    ]
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    university: 'Saurashtra University',
    institution: "Bhavan's Shri H.J. Doshi College",
    location: 'Jamnagar, Gujarat',
    duration: '2022 - 2025',
    semesters: [
      {
        semester: 'Semester 2',
        subjects: [
          { name: 'Computer Organization And Architecture', url: 'https://drive.google.com/file/d/1nTwgyhykyvTGf_0fLJRD6pXV8KYYLvp4/view?usp=sharing' },
          { name: 'Data Structures', url: 'https://drive.google.com/file/d/1-qD9cDa1_02_nProgFK1U0eilrtMM4tr/view?usp=sharing' },
          { name: 'PHP', url: 'https://drive.google.com/file/d/1gk7lqcLnAIjVHbYFtb8xGYOzWpP7ESTj/view?usp=sharing' },
          { name: 'System Analysis And Design', url: 'https://drive.google.com/file/d/1t6U1TKBUcjN59a-R3c-LSPGoyilhhh9T/view?usp=sharing' },
        ],
        zipUrl: 'https://drive.google.com/file/d/18yFCCYj3yVR9x8Kp0CJTxVseJKQ14qbd/view?usp=sharing',
      },
      {
        semester: 'Semester 3',
        subjects: [
          { name: 'C++ Programming', url: 'https://drive.google.com/file/d/1kB5l3qdVdzk3Q9yW8TdDD1sN6eHYWu9r/view?usp=sharing' },
          { name: 'Oracle Database', url: 'https://drive.google.com/file/d/17dVyPbmx45OQ5uluHqUmX6zQy3HR6KG6/view?usp=sharing' },
          { name: 'WordPress Development', url: 'https://drive.google.com/file/d/1BSHXPuecexLuf-hqlFSFoAySOZZ6hDTC/view?usp=sharing' },
        ],
        zipUrl: 'https://drive.google.com/file/d/1OiNyjU59RQISpJTQLqJvNcSR6QO_IkG3/view?usp=sharing',
      },
      {
        semester: 'Semester 4',
        subjects: [
          { name: 'C# Programming', url: 'https://drive.google.com/file/d/1tawCbPHTIOE7r7Gx_xgnDVxDuXt6lUH9/view?usp=sharing' },
          { name: 'Java Programming', url: 'https://drive.google.com/file/d/1ivokJzUcn9jROxk0XCkVYZw7sFvQAdx_/view?usp=sharing' },
          { name: 'Mixed Materials', url: 'https://drive.google.com/file/d/1JuhvVQWE8Uc0p0E-ddAT0PKfVUl6b5YI/view?usp=sharing' },
          { name: 'Operating Systems', url: 'https://drive.google.com/file/d/1tMWSclNsciHpozYNtPgtaghiXAWGCAT0/view?usp=sharing' },
          { name: 'Search Engine Optimization (SEO)', url: 'https://drive.google.com/file/d/1bFxvU_6QwjztPRmZpws7yLVQ9hoNmTAG/view?usp=sharing' },
        ],
        zipUrl: 'https://drive.google.com/file/d/1fyc5CfPxHuItiMty6MPfjSSOs72GKQCX/view?usp=sharing',
      },
      {
        semester: 'Semester 5',
        subjects: [
          { name: 'Cyber Security', url: 'https://drive.google.com/file/d/1bNnp8W0JkPd84Iu3LMlDmhkC5KQFnCCs/view?usp=sharing' },
          { name: 'J2EE (Java Enterprise Edition)', url: 'https://drive.google.com/file/d/1XSDyIJZ4VCcBo_Rb8nBtiOz18yn6G7HB/view?usp=sharing' },
          { name: 'Mixed Materials', url: 'https://drive.google.com/file/d/1Bv7EAow1GBLSaKjCtXSm9umqpnXJuF_e/view?usp=sharing' },
          { name: 'Python Programming', url: 'https://drive.google.com/file/d/1VxQmR4tDmgQ8kxkJ11c5aVYCrE8FDaX0/view?usp=sharing' },
        ],
        zipUrl: 'https://drive.google.com/drive/folders/1pD10irgJccr3vgA_phF7JWiKxFCsxX3K?usp=sharing',
      },
      {
        semester: 'Semester 6',
        subjects: [
          { name: 'Android Development', url: 'https://drive.google.com/file/d/1pOKc9Ls3_Nq_GgMbr9wD_WBpUMFU43vE/view?usp=sharing' },
          { name: 'ASP.NET Development', url: 'https://drive.google.com/file/d/1euNkBfMs7oua-ATKnnQNA5j2I-9_TRBu/view?usp=sharing' },
          { name: 'Machine Learning', url: 'https://drive.google.com/file/d/1_Q2L7vkwuM2BXJVblmgbXtsa-N25n2KF/view?usp=sharing' },
          { name: 'Mixed Materials', url: 'https://drive.google.com/file/d/1SUHv6CNdLbq4Z_E4TQIl2Sy-rRCPbWkB/view?usp=sharing' },
          { name: 'Practical Implementation', url: 'https://drive.google.com/file/d/15YQaB3oeaLrdc3PDge5YRMYeEHLzqfew/view?usp=sharing' },
        ],
        zipUrl: 'https://drive.google.com/file/d/1_zCG9s2rA669wv9m8bUDfQ2QqMohIA3B/view?usp=sharing',
      }
    ]
  }
]