import SwiftUI
import WebKit

private let notesURL = URL(string: "https://notes.heyitsmejosh.com")!

#if os(macOS)
struct WebView: NSViewRepresentable {
    func makeNSView(context: Context) -> WKWebView { WKWebView() }
    func updateNSView(_ webView: WKWebView, context: Context) {
        webView.load(URLRequest(url: notesURL))
    }
}
#else
struct WebView: UIViewRepresentable {
    func makeUIView(context: Context) -> WKWebView { WKWebView() }
    func updateUIView(_ webView: WKWebView, context: Context) {
        webView.load(URLRequest(url: notesURL))
    }
}
#endif
