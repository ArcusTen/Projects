import os
from pytube import YouTube

def download_video(url, output_path='.'):
    try:
        yt = YouTube(url)
        video = yt.streams.filter(file_extension='mp4', progressive=True).first()
        print(f"Downloading: {yt.title} ({video.filesize / (1024 * 1024):.2f} MB)")

        video.download(output_path)
        print("Download Complete!!")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    video_url = input("Enter the YouTube video URL: ")
    output_directory = input("Enter the output directory (press Enter for the current directory): ").strip() or '.'

    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    download_video(video_url, output_directory)
