import { Loader2, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      {/* Logo & Animation */}
      <div className="relative mb-6 flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 shadow-xl animate-pulse">
          <Zap className="h-8 w-8 text-white" />
        </div>
        <Sparkles className="absolute -top-4 -right-4 h-6 w-6 text-yellow-400 animate-bounce" />
      </div>

      {/* Titre principal */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-foreground mb-2 tracking-tight">
        Invoxia arrive bientôt&nbsp;!
      </h1>

      {/* Sous-titre */}
      <p className="text-lg sm:text-xl text-muted-foreground text-center max-w-xl mb-6">
        Le hub universel pour explorer, tester et connecter{' '}
        <span className="font-semibold text-rose-600">toutes les APIs du monde</span>.<br />
        <span className="inline-flex items-center gap-1">
          <Loader2 className="inline h-5 w-5 animate-spin text-rose-500" />
          <span>Site en construction</span>
        </span>
      </p>

      {/* Call-to-action */}
      <Link
        href="https://discord.gg/invoxia"
        target="_blank"
        className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-base font-medium text-background shadow-lg transition-all hover:bg-foreground/90 mb-8"
      >
        <Sparkles className="h-5 w-5 text-yellow-300" />
        Rejoindre la communauté
      </Link>

      {/* Teaser des features */}
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        <span className="rounded-full bg-rose-100 px-4 py-1 text-sm font-medium text-rose-700 shadow">
          +500 APIs
        </span>
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 shadow">
          Playground interactif
        </span>
        <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700 shadow">
          Freemium & Open Source
        </span>
        <span className="rounded-full bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-700 shadow">
          IA intégrée
        </span>
      </div>
    </div>
  );
}
