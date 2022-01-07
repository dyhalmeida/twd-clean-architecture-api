export class Email {
  static validate (email: string | null): boolean {
    const emailRegex =
    /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

    if (!email) return false
    if (email.length > 320) return false
    if (!emailRegex.test(email)) return false
    const [local, domain] = email.split('@')
    if (local.length > 64 || !local) return false
    if (domain.length > 255 || !domain) return false
    const domainParts = domain.split('.')
    if (domainParts.some(part => part.length > 63)) return false
    return true
  }
}
