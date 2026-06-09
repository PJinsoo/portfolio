# 백업용 PowerShell 스크립트
$source = "d:\study\portfolio"
$destination = "d:\study\portfolio\backup\src_backup_temp"

# 대상 폴더 생성
if (!(Test-Path -Path $destination)) {
    New-Item -ItemType Directory -Force -Path $destination
}

# 이동
Get-ChildItem -Path $source -Exclude ".git", ".idea", "backup", "node_modules", ".next" | ForEach-Object {
    Write-Host "Moving: $($_.FullName)"
    Move-Item -Path $_.FullName -Destination $destination -Force
}
