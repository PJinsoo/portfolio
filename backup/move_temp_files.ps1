# 파일 이동 및 백업 이식 스크립트
$tempDir = "d:\study\portfolio_temp"
$targetDir = "d:\study\portfolio"
$backupDir = "d:\study\portfolio\backup\src_backup_temp"

# 1. 임시 생성된 Next.js 16 프로젝트 파일들을 원본 폴더로 이동 (덮어쓰기)
Write-Host "Moving new Next.js 16 files to $targetDir"
Get-ChildItem -Path $tempDir | ForEach-Object {
    $destPath = Join-Path $targetDir $_.Name
    if (Test-Path -Path $destPath) {
        Remove-Item -Recurse -Force $destPath
    }
    Move-Item -Path $_.FullName -Destination $targetDir -Force
}

# 2. 임시 폴더 삭제
if (Test-Path -Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
}

# 3. 백업해 둔 컴포넌트 및 자원들을 원본 폴더로 이식
Write-Host "Restoring components and assets from backup"

# 복사 대상 폴더 목록
$restoreFolders = @("components", "images", "public", "utility", "styles")

foreach ($folder in $restoreFolders) {
    $srcFolder = Join-Path $backupDir $folder
    $destFolder = Join-Path $targetDir $folder
    if (Test-Path -Path $srcFolder) {
        Write-Host "Restoring $folder to $destFolder"
        if (Test-Path -Path $destFolder) {
            # 새로 생성된 public 등 폴더와 병합하기 위해 개별 파일 복사
            Copy-Item -Path "$srcFolder\*" -Destination $destFolder -Recurse -Force
        } else {
            Copy-Item -Path $srcFolder -Destination $targetDir -Recurse -Force
        }
    }
}
