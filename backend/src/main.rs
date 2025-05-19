use axum::{routing::get, Router, Json};
use serde::Serialize;
use std::net::SocketAddr;

#[derive(Serialize)]
struct Message {
    text: String,
}

async fn hello() -> Json<Message> {
    Json(Message {
        text: "Hello from Rust backend!".to_string(),
    })
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/", get(hello));

    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));
    println!("Server running at http://{}", addr);

    axum::serve(
        tokio::net::TcpListener::bind(addr).await.unwrap(),
        app.into_make_service(),
    )
    .await
    .unwrap();
}
