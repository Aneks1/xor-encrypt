export class Base64 {
    public static encrypt(str: string): string
    public static decrypt(str: string): string
}

export class XOR {
    public static base(str: string, key: number): string
    public static encrypt(str: string, key: number): string
    public static decrypt(str: string, key: number): string
}