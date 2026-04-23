import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"

export default function JorgePortfolioMockup() {
  const experience = [
    {
      role: "3D Modeler & App Quality Check",
      company: "XRF",
      period: "Mar 2024 — Apr 2026",
      location: "Madrid, Spain",
      description:
        "Created and optimized 3D models for virtual and augmented reality applications while reviewing VR, PC and mobile apps to detect issues, report bugs and improve the final user experience.",
    },
    {
      role: "3D Modeler",
      company: "Freelance",
      period: "Nov 2023 — Mar 2024",
      location: "Madrid, Spain",
      description:
        "Developed accurate, detailed 3D assets for different industries, translating concepts into clean visual solutions while maintaining quality and delivery standards.",
    },
    {
      role: "Set Dresser",
      company: "3 Doubles Producciones",
      period: "Feb 2023 — Sep 2023",
      location: "Tenerife, Spain",
      description:
        "Built believable animated environments through prop placement, scene dressing and close collaboration with art direction and production design teams.",
    },
    {
      role: "Animation Quality Check",
      company: "3 Doubles Producciones",
      period: "Dec 2021 — Sep 2023",
      location: "Tenerife, Spain",
      description:
        "Reviewed animation work, provided feedback and helped maintain technical and visual consistency across production workflows.",
    },
  ]

  const strengths = [
    "3D Modeling",
    "Layout",
    "Set Dressing",
    "Animation Quality Check",
    "App Testing",
    "Rigging Assistance",
    "Production Support",
    "Attention to Detail",
  ]

  const tools = [
    "Autodesk Maya",
    "Blender",
    "ZBrush",
    "Substance Painter",
    "ShotGrid",
    "Photoshop",
    "Illustrator",
    "After Effects",
    "Premiere Pro",
  ]

  const projects = [
    {
      title: "SuperKlaus",
      contribution: "Quality Check • Set Dressing",
      summary:
        "Supported the production through scene presentation, environment polish and visual review to help maintain a strong final look.",
      image: "/images/projects/superklaus.jpg",
      link: "https://www.youtube.com/watch?v=zae8uv7nm8c",
    },
    {
      title: "Giants of La Mancha",
      contribution: "Quality Check • Layout",
      summary:
        "Helped shape clear, readable scenes while maintaining consistency and supporting the production’s visual storytelling.",
      image: "/images/projects/giants-of-la-mancha.jpg",
      link: "https://www.youtube.com/watch?v=r6y8Ac9A7mU",
    },
    {
      title: "200% Wolf",
      contribution: "Rigging Assistance",
      summary:
        "Provided support for animation-ready character workflows with a focus on technical reliability and clean production handoff.",
      image: "/images/projects/200-wolf.jpg",
      link: "https://www.youtube.com/watch?v=s0gdFPg3cwI",
    },
    {
      title: "ARPO The Robot",
      contribution: "Quality Check",
      summary:
        "Reviewed deliverables to help ensure animation quality, clarity and visual consistency across the pipeline.",
      image: "/images/projects/arpo.jpg",
      link: "https://www.youtube.com/watch?v=Nolk3lhXeNM",
    },
    {
      title: "Momonsters",
      contribution: "Quality Check",
      summary:
        "Contributed to polished animation output by supporting review workflows and maintaining reliable visual standards.",
      image: "/images/projects/momonsters.jpg",
      link: "https://www.youtube.com/watch?v=Cin2FYG4UnI",
    },
    {
      title: "NORbert",
      contribution: "Set Dressing",
      summary:
        "Supported stylized worldbuilding through scene composition and detail-focused set dressing work.",
      image: "/images/projects/norbert.jpg",
      link: "https://www.youtube.com/watch?v=X1eFW6C6TT8",
    },
    {
      title: "Flamingo Flamenco",
      contribution: "Set Dressing",
      summary:
        "Helped build appealing scenes and visually consistent environments for a vibrant animated production.",
      image: "/images/projects/flamingo-flamenco.jpg",
      link: "https://www.youtube.com/watch?v=qX9TcciNvwE",
    },
  ]

  const heroCards = [
    {
      title: "Flamingo Flamenco",
      contribution: "Set Dressing",
      image: "/images/hero/flamingo-flamenco.jpg",
      link: "https://www.youtube.com/watch?v=qX9TcciNvwE",
    },
    {
      title: "Giants of La Mancha",
      contribution: "Quality Check • Layout",
      image: "/images/hero/giants-of-la-mancha.jpg",
      link: "https://www.youtube.com/watch?v=r6y8Ac9A7mU",
    },
    {
      title: "SuperKlaus",
      contribution: "Quality Check • Set Dressing",
      image: "/images/hero/superklaus.jpg",
      link: "https://www.youtube.com/watch?v=zae8uv7nm8c",
    },
    {
      title: "200% Wolf",
      contribution: "Rigging Assistance",
      image: "/images/hero/200-wolf.jpg",
      link: "https://www.youtube.com/watch?v=s0gdFPg3cwI",
    },
  ]

  const education = [
    {
      title: "Audiovisual Production Direction",
      school: "RTVE Instituto",
      detail: "150h · 6 ECTS · Production workflows, planning and pipeline coordination",
    },
    {
      title: "Online Master in 3D with Autodesk Maya and VFX with Houdini",
      school: "Trazos",
      detail: "Advanced modeling, VFX and production workflows",
    },
    {
      title: "Online Master in 3D Character Modeling for Film and Video Games",
      school: "Animum",
      detail: "Character creation for production environments",
    },
    {
      title: "Fundamentals of 3D Production with Autodesk Maya",
      school: "Animum",
      detail: "Core 3D pipeline and asset creation",
    },
    {
      title: "3D Digital Character Animation",
      school: "SPEGC",
      detail: "Animation principles and character performance",
    },
    {
      title: "Audiovisual Assembly and Postproduction",
      school: "Cesur",
      detail: "Editing and postproduction fundamentals",
    },
  ]

  const { scrollY } = useScroll()

  const heroY = useTransform(scrollY, [0, 500], [0, -40])

  const [activeVideo, setActiveVideo] = useState(null)

  const [hoveredProject, setHoveredProject] = useState(null)

  const getYouTubeVideoId = (url) => {
    try {
      const parsed = new URL(url)
      return parsed.searchParams.get("v")
    } catch {
      return null
    }
  }

  const getYouTubeHoverEmbedUrl = (url) => {
    const videoId = getYouTubeVideoId(url)
    if (!videoId) return null

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0`
  }

  const getYouTubeEmbedUrl = (url) => {
    try {
      const parsed = new URL(url)
      const videoId = parsed.searchParams.get("v")
      if (!videoId) return null
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    } catch {
      return null
    }
  }

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveVideo(null)
      }
    }

    if (activeVideo) {
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [activeVideo])

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <motion.div
        style={{ y: heroY }}
        className="relative mx-auto max-w-7xl px-6 pb-0 pt-8 md:px-10 lg:pb-0 lg:pt-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(250,204,21,0.18),transparent_24%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-8 md:px-10 lg:pb-12 lg:pt-10">
          <header className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
            <div>
              <p className="text-sm font-medium tracking-[0.24em] text-white/90">
                JORGE CÁCERES HERNÁNDEZ
              </p>
            </div>
            <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.24em] text-white/55">
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#experience" className="transition hover:text-white">
                Experience
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </header>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <p className="text-xs uppercase tracking-[0.48em] text-yellow-300">
                3D Artist • Production Generalist • Animation Pipelines
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-[6.5rem]">
                Crafted for
                <br />
                production.
                <br />
                Built for
                <br />
                polished worlds.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                Jorge Cáceres Hernández is a 3D Artist working across modeling,
                layout, set dressing, animation quality check and cross-platform
                app review for VR, PC and mobile experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-yellow-300 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                >
                  View Selected Work
                </a>
                <a
                  href="https://jorge_caceres.artstation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/5"
                >
                  ArtStation
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/5"
                >
                  Let’s Talk
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: "Core Areas",
                    value: "Modeling • Layout • Set Dressing",
                  },
                  {
                    label: "Quality Work",
                    value: "Animation Quality Check • App Review",
                  },
                  {
                    label: "Platforms",
                    value: "VR • PC • Mobile",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/85">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-3">
              <motion.div
                className="relative row-span-3 overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                <img
                  src="/images/jorge.jpg"
                  alt="Jorge Cáceres Hernández"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-yellow-300">
                    Profile
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">
                    A detail-driven artist balancing visual craft, production
                    support and issue detection across animation and app
                    workflows.
                  </p>
                </div>
              </motion.div>

              {heroCards.map((project) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveVideo({
                      title: project.title,
                      url: getYouTubeEmbedUrl(project.link),
                    })
                  }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101010] shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-yellow-300/20 via-transparent to-blue-400/20" />
                  </div>

                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-44 w-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-yellow-300/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-95 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-100">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-300/25 bg-black/35 shadow-[0_0_0_rgba(250,204,21,0),0_14px_40px_rgba(0,0,0,0.28)] backdrop-blur-[2px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-yellow-300/45 group-hover:bg-black/45 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.16),0_14px_40px_rgba(0,0,0,0.34)]">
                      <div className="ml-1 h-0 w-0 border-y-[12px] border-y-transparent border-l-[18px] border-l-white" />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/65">
                      {project.contribution}
                    </p>
                    <p className="mt-1 text-lg font-medium transition duration-300 group-hover:text-yellow-200">
                      {project.title}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <section className="relative z-20 mx-auto -mt-10 max-w-7xl overflow-hidden px-6 py-16 md:-mt-14 md:px-10 md:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-transparent via-[#070707]/70 to-[#070707]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_30%)]" />
        <div className="pointer-events-none absolute -left-12 top-10 -z-10 h-48 w-48 rounded-full bg-yellow-300/8 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-56 w-56 rounded-full bg-blue-400/8 blur-3xl" />

        <div className="rounded-[2.25rem] border border-white/8 bg-[#0b0b0b]/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-10">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative">
              <div className="absolute left-0 top-0 h-24 w-px bg-gradient-to-b from-yellow-300/80 via-yellow-300/20 to-transparent" />
              <div className="pl-6">
                <p className="text-xs uppercase tracking-[0.48em] text-yellow-300">
                  About
                </p>
                <h2 className="mt-5 max-w-md text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                  Creative execution with production awareness.
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <p className="text-sm leading-8 text-white/72">
                  Jorge works across multiple stages of production, from asset
                  creation and scene support to animation review and app testing.
                  His profile is especially strong in tasks that require care,
                  consistency and a clear understanding of the wider pipeline.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <p className="text-sm leading-8 text-white/72">
                  Beyond modeling, he contributes through layout, set dressing,
                  quality check and issue reporting, helping teams maintain visual
                  quality while keeping production practical, reliable and efficient.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-5 md:col-span-2">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-10 bg-gradient-to-r from-yellow-300/80 to-transparent" />
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                    Focus Areas
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                  {[
                    "3D Modeling",
                    "Layout & Set Dressing",
                    "Animation Quality Check",
                    "VR • PC • Mobile App Review",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4 text-sm text-white/85 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.48em] text-yellow-300">
              Selected Productions
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              A portfolio built through scenes, systems and visual reliability.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Productions where Jorge contributed through quality check, set
              dressing, layout and rigging assistance across animation
              pipelines.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-12">
            {projects.map((project, index) => {
              const spanClass =
                index === 0 || index === 1
                  ? "xl:col-span-6"
                  : index === 2
                  ? "xl:col-span-4"
                  : index === 3
                  ? "xl:col-span-4"
                  : index === 4
                  ? "xl:col-span-4"
                  : index === 5
                  ? "xl:col-span-6"
                  : "xl:col-span-6"

              return (
                <motion.a
                  key={project.title}
                  href={project.link}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveVideo({
                      title: project.title,
                      url: getYouTubeEmbedUrl(project.link),
                    })
                  }}
                  onMouseEnter={() => setHoveredProject(project.title)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] shadow-[0_20px_80px_rgba(0,0,0,0.45)] ${spanClass}`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.015 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-yellow-300/20 via-transparent to-blue-400/20" />
                  </div>

                  <div className="relative h-80 overflow-hidden">
                    {hoveredProject === project.title ? (
                      <iframe
                        src={getYouTubeHoverEmbedUrl(project.link)}
                        title={`${project.title} trailer preview`}
                        className="h-full w-full scale-[1.02]"
                        allow="autoplay; encrypted-media; picture-in-picture"
                      />
                    ) : (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                        initial={{ scale: 1.08 }}
                        whileInView={{ scale: 1 }}
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-90" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-yellow-300/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 scale-95 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-100">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-300/25 bg-black/30 shadow-[0_0_0_rgba(250,204,21,0),0_14px_40px_rgba(0,0,0,0.24)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-yellow-300/45 group-hover:bg-black/40 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.16),0_14px_40px_rgba(0,0,0,0.30)]">
                        <div className="ml-1 h-0 w-0 border-y-[12px] border-y-transparent border-l-[18px] border-l-white" />
                      </div>
                    </div>

                    <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/85 backdrop-blur-md">
                      {project.contribution}
                    </div>

                    <div className="pointer-events-none absolute bottom-5 right-5 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/70 opacity-0 transition duration-300 group-hover:opacity-100">
                      Preview trailer
                    </div>
                  </div>

                  <div className="relative p-6 md:p-7">
                    <div className="mb-4 h-px w-12 bg-gradient-to-r from-yellow-300/80 to-transparent transition-all duration-500 group-hover:w-20" />

                    <h3 className="text-2xl font-semibold tracking-tight transition duration-300 group-hover:text-yellow-200">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 transition duration-300 group-hover:text-white/85">
                      {project.summary}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 md:px-10 md:py-24"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(250,204,21,0.08),transparent_22%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.06),transparent_24%)]" />
        <div className="pointer-events-none absolute left-0 top-10 -z-10 text-[8rem] font-semibold uppercase tracking-[-0.08em] text-white/[0.02] md:text-[12rem]">
          Work
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-yellow-300/40 via-white/10 to-transparent" />
            <div className="pl-6">
              <p className="text-xs uppercase tracking-[0.48em] text-yellow-300">
                Experience
              </p>
              <h2 className="mt-5 max-w-md text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Production experience across modeling, review and environment work.
              </h2>
            </div>
          </div>

          <div className="relative space-y-5">
            <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-white/10 via-white/6 to-transparent lg:block" />

            {experience.map((item) => (
              <motion.div
                key={`${item.company}-${item.role}-${item.period}`}
                className="relative grid gap-5 rounded-[2rem] border border-white/10 bg-[#101010]/95 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:grid-cols-[0.72fr_1.28fr]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="absolute -left-[29px] top-10 hidden h-3 w-3 rounded-full border border-yellow-300/50 bg-[#0f0f0f] lg:block">
                  <div className="absolute inset-[3px] rounded-full bg-yellow-300/80" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-yellow-300">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-white/82">{item.company}</p>
                  <p className="mt-1 text-sm text-white/45">{item.location}</p>
                </div>

                <div>
                  <p className="text-base leading-8 text-white/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8">
            <p className="text-xs uppercase tracking-[0.48em] text-yellow-300">
              Tools
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
              Software & Pipeline
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8">
            <p className="text-xs uppercase tracking-[0.48em] text-yellow-300">
              Strengths
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
              How Jorge adds value
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className="mx-auto max-w-7xl px-6 py-24 md:px-10"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.48em] text-yellow-300">
              Education
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Training built around 3D production and visual storytelling.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-[1.5rem] border border-white/10 bg-[#101010] px-6 py-5 text-sm text-white/80 transition-all duration-300 hover:border-yellow-300/40"
              >
                {/* TEXTO PRINCIPAL */}
                <p className="font-medium text-white">
                  {item.title} — {item.school}
                </p>

                {/* HOVER DETAIL */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="max-w-[80%] translate-y-2 rounded-xl border border-white/10 bg-black/75 px-4 py-3 text-center text-xs leading-5 text-white/80 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0">
                    {item.detail}
                  </div>
                </div>

                {/* GLOW SUAVE */}
                <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-0 transition duration-300 group-hover:opacity-100 shadow-[0_0_40px_rgba(250,204,21,0.08)]" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="overflow-hidden rounded-[2.25rem] border border-yellow-300/20 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_26%)] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.48em] text-yellow-300">
            Contact
          </p>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold tracking-[-0.04em] md:text-6xl">
            Looking for a 3D artist who understands both visual quality and
            production reality?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Jorge combines artistic care, technical awareness and a
            collaborative mindset to help teams build polished assets, readable
            scenes and stronger production outcomes.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/85">
            <a
              href="mailto:cacereshernandez.jorge@gmail.com"
              className="rounded-full border border-white/10 px-5 py-3 hover:bg-white/5"
            >
              cacereshernandez.jorge@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/jorge-c%C3%A1ceres-hern%C3%A1ndez-a3445a137/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-5 py-3 hover:bg-white/5"
            >
              LinkedIn
            </a>
            <a
              href="https://jorge_caceres.artstation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-5 py-3 hover:bg-white/5"
            >
              ArtStation
            </a>
          </div>
        </div>
      </section>
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#090909] shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-yellow-300">
                  Trailer
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white md:text-xl">
                  {activeVideo.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="Close trailer modal"
              >
                Close
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              <iframe
                key={activeVideo.url}
                src={activeVideo.url}
                title={activeVideo.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs text-white/45 md:px-6">
              <span>Press Esc to close</span>
              <span>Click outside to dismiss</span>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  )
}