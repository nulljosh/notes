import SwiftUI
import WebKit

struct WebView: UIViewRepresentable {
    private let url = URL(string: "https://notes.heyitsmejosh.com")!
    func makeUIView(context: Context) -> WKWebView { WKWebView() }
    func updateUIView(_ webView: WKWebView, context: Context) {
        webView.load(URLRequest(url: url))
    }
}
