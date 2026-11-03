"use client"

import { GoogleIcon } from "@/components/icon/google"
import { MicrosoftIcon } from "@/components/icon/microsoft"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Button } from "@/components/button"
import { useLogin } from "@/features/auth"

export function LoginForm() {
  const {
    isLoading,
    message,
    step,
    handleEmailLogin,
    handleOtpVerify,
    handleOAuthLogin,
    handleBackToEmail,
  } = useLogin()

  return (
    <div className="w-full flex flex-col gap-6">
      {step === "email" && (
        <form onSubmit={handleEmailLogin} className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
            />
          </div>
          <Button type="submit" isLoading={isLoading}>
            Continue
          </Button>
        </form>
      )}

      {step === "code" && (
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
          <Button type="submit" isLoading={isLoading}>
            Verify Code
          </Button>
          <Button type="button" variant="ghost" onClick={handleBackToEmail}>
            Wait, let me change my email
          </Button>
        </form>
      )}

      {message && (
        <p className={message.type === "error" ? "text-error" : "text-success"}>
          {message.text}
        </p>
      )}

      {step === "email" && (
        <>
          <div className="flex items-center w-full my-1">
            <div className="h-divider" />
            <span className="px-4 text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
              or continue with
            </span>
            <div className="h-divider" />
          </div>

          <div className="w-full flex flex-col gap-3">
            <Button
              type="button"
              variant="outline"
              // disabled={isLoading}
              // disabling temporarily since it is still not implemented
              disabled={true}
              onClick={() => handleOAuthLogin("google")}
            >
              <GoogleIcon />
              Google
            </Button>

            <Button
              type="button"
              variant="outline"
              // disabled={isLoading}
              // disabling temporarily since it is still not implemented
              disabled={true}
              onClick={() => handleOAuthLogin("azure")}
            >
              <MicrosoftIcon />
              Microsoft
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
