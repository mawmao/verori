"use client"

import { GoogleIcon } from "@/components/icon/google"
import { MicrosoftIcon } from "@/components/icon/microsoft"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Spinner } from "@/components/spinner"
import { useLogin } from "@/features/auth"

export function LoginForm() {
  const {
    isLoading,
    message,
    step,
    handleEmailLogin,
    handleOtpVerify,
    handleOAuthLogin,
    handleBackToEmail
  } = useLogin()

  return (
    <div className="w-full flex flex-col gap-6">

      {step === 'email' && (
        <form onSubmit={handleEmailLogin} className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              label="Email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 w-full py-2 mt-2 text-center rounded-sm text-xs font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            {isLoading && <Spinner />}
            Continue
          </button>
        </form>
      )}

      {step === 'code' && (
        <form onSubmit={handleOtpVerify} className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="code">6-digit code</Label>
            <Input
              id="code"
              name="code"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d{6}"
              maxLength={6}
              placeholder="000000"
              required
              className="text-sm text-center tracking-[0.5em] font-mono"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 w-full py-2 mt-2 text-center rounded-sm text-xs font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            {isLoading && <Spinner />}
            Verify Code
          </button>

          <button
            type="button"
            onClick={handleBackToEmail}
            className="cursor-pointer text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 mt-2 text-center w-full transition-colors"
          >
            Wait, let me change my email
          </button>
        </form>
      )}

      {message && (
        <p className={`text-sm w-full text-center  ${message.type === 'error' ? 'text-red-500 dark:text-red-400' : 'text-teal-600 dark:text-teal-400'}`}>
          {message.text}
        </p>
      )}

      {step === 'email' && (
        <>
          <div className="flex items-center w-full my-1">
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
            <span className="px-4 text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
              or continue with
            </span>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <button
              type="button"
              disabled={isLoading}
              onClick={() => handleOAuthLogin('google')}
              className="cursor-pointer w-full flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 py-2.5 rounded-sm text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-zinc-50 disabled:opacity-50 transition-colors"
            >
              <GoogleIcon />
              Google
            </button>

            <button
              type="button"
              disabled={isLoading}
              onClick={() => handleOAuthLogin('azure')}
              className="cursor-pointer w-full flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 py-2.5 rounded-sm text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-zinc-50 disabled:opacity-50 transition-colors"
            >
              <MicrosoftIcon />
              Microsoft
            </button>
          </div>
        </>
      )}
    </div>
  )
}
